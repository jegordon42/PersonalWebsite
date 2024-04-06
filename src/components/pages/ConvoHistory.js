import { useEffect, useState } from 'react';
import { getConvos, editConvo, deleteConvo } from '../../firebase/storage';
import { dateToDisplayString, dateToStorageString } from '../../firebase/utils';
import { Tooltip } from "react-tooltip";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

export function ConvoHistory() {
  const [conversations, setConversations] = useState([])
  const [sortedAndFilteredConvos, setSortedAndFilteredConvos] = useState([])
  const [sort, setSort] = useState('newest')
  const [expandAll, setExpandAll] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [filterMenuAnchor, setFilterMenuAnchor] = useState(null);
  const filterMenuOpen = Boolean(filterMenuAnchor);
  const hasReadFilter = filterList.filter((filter) => filter.filterType === 'read').length > 0;

  const getSortedAndFilteredConvos = () => {
    setSortedAndFilteredConvos( 
      conversations
      .filter((convo) => {
        for(let filter of filterList){
          if(filter.filterType === 'read'){
            if(filter.value === 'Show Read Only' && !convo.read)
              return false;
            else if(filter.value === 'Show Unread Only' && convo.read)
              return false;
          }
          else if(filter.filterType === 'date'){
            if(!(convo.date.getFullYear() == filter.value.date.getFullYear() && convo.date.getMonth() == filter.value.date.getMonth() && convo.date.getDate() == filter.value.date.getDate())){
              if(filter.value.operation === 'Before' && !(convo.date < filter.value.date))
                return false;
              if(filter.value.operation === 'After' && !(convo.date > filter.value.date))
                return false;
              if(filter.value.operation === 'Equal')
                return false;
            }
          }
          else if(filter.filterType === 'messages'){
            if(filter.value.text){
              if(filter.value.operation === 'Contains' && !(convo.messageList.filter((message)=>message.message.toLowerCase().includes(filter.value.text.toLowerCase())).length > 0))
                return false;
              if(filter.value.operation === 'Does Not Contain' && !(convo.messageList.filter((message)=>message.message.toLowerCase().includes(filter.value.text.toLowerCase())).length == 0))
                return false;
            }
          }
        }
        return true;
      })
      .sort((a, b)=>{
        if(sort == 'newest')
          return a.date >= b.date ? -1 : 1
        return a.date <= b.date ? -1 : 1
      })
    );
  }

  const getConversations = async () => { 
    setConversations([]) 
    let convos = await getConvos();
    convos = convos.map((convo) => {
      convo.expanded = expandAll
      return convo;
    });
    setConversations(convos)
  }

  const updateReadStatus = async (convoToUpdate, read) => {  
    const updatedConvo = {
      read,
      messageList: convoToUpdate.messageList
    }
    await editConvo(dateToStorageString(convoToUpdate.date), updatedConvo);

    setConversations((convos) => convos.map((convo) => {
      if(convo.date === convoToUpdate.date)
        convo.read = read
      return convo;
    }));
  }

  const deleteConversation = async (convoToDelete) => {  
    if(window.confirm('Are you sure you want to delete this conversation?')){
      await deleteConvo(dateToStorageString(convoToDelete.date));
      setConversations((convos) => convos.filter((convo) => {
        return convo.date !== convoToDelete.date
      }));
    }
  }

  const handleExpandChange = (convoId) => (event, isExpanded) => {
    setConversations((convos) => convos.map((convo) => {
      if(convo.date === convoId)
        convo.expanded = isExpanded
      return convo;
    }));
  };

  const setExpand = (expand) => {
    setConversations((convos) => convos.map((convo) => {
      convo.expanded = expand
      return convo;
    }));
    setExpandAll(expand)
  };

  const openFilterMenu = (event) => {
    setFilterMenuAnchor(event.currentTarget);
  };

  const closeFilterMenu = () => {
    setFilterMenuAnchor(null);
  };

  const addFilter = (filterType) => {
    const newFilter = {filterType, id: Math.random()}
    if(filterType === 'read')
      newFilter.value = 'Show Unread Only'
    if(filterType === 'date')
      newFilter.value = {date: new Date(), operation: 'Before'}
    if(filterType === 'messages')
      newFilter.value = {text: '', operation: 'Contains'}
    setFilterList((existingFilters) => ([...existingFilters, newFilter]))
    closeFilterMenu()
  }

  const updateFilter = (filterId, value) => {
    setFilterList((filters) => filters.map((filter) => {
      if(filter.id === filterId)
        filter.value = value;
      return filter
    }))
  }

  const deleteFilter = (filterId) => {
    setFilterList((filters) => filters.filter((filter) => {
      if(filter.id === filterId)
        return false
      return true
    }))
  }

  useEffect(()=>{
    getConversations();
  }, [])

  useEffect(()=>{
    getSortedAndFilteredConvos();
  }, [conversations, filterList, sort])

  const pageStyle = {
    padding:'20px'
  }
  const headerStyle = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
  const titleStyle = {
    color: 'white',
    marginBottom:'20px',
  }
  const panelTitleStyle = {
    fontSize: '15px',
    fontWeight: '800'
  }
  const filterRowStyle = {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    padding:'5px',
    marginBottom: '15px',
    borderRadius:'10px',
  }

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Conversation History</h1>
        <div>
          <Tooltip id={'filter_id'}><b>Add Filter</b></Tooltip>
          <Button onClick={openFilterMenu} data-tooltip-id={"filter_id"} data-tooltip-place="left">
            Filter<FilterAltIcon/>
          </Button>
          <Menu
            anchorEl={filterMenuAnchor}
            open={filterMenuOpen}
            onClose={closeFilterMenu}
            
          >
            {!hasReadFilter && 
              <MenuItem onClick={()=>addFilter('read')}>Read/Unread</MenuItem>
            }
            <MenuItem onClick={()=>addFilter('date')}>Date</MenuItem>
            <MenuItem onClick={()=>addFilter('messages')}>Messages</MenuItem>
          </Menu>
          {sort === 'newest' && 
            <>
              <Tooltip id={'sort_newest'}><b>Sorted by newest first</b></Tooltip>
              <Button 
                variant="text" 
                data-tooltip-id={"sort_newest"} 
                data-tooltip-place="left"
                onClick={() => setSort('oldest')}
              >
                Newest First<ArrowUpwardIcon/>
              </Button>
            </>
          }
          {sort === 'oldest' && 
            <>
              <Tooltip id={'sort_oldest'}><b>Sorted by oldest first</b></Tooltip>
              <Button 
                variant="text" 
                data-tooltip-id={"sort_oldest"} 
                data-tooltip-place="left"
                onClick={() => setSort('newest')}
              >
                Oldest First<ArrowDownwardIcon/>
              </Button>
            </>
          }
          {expandAll && 
            <>
              <Tooltip id={'collapse_all'}><b>Collapse</b></Tooltip>
              <Button 
                variant="text" 
                data-tooltip-id={"collapse_all"} 
                data-tooltip-place="left"
                onClick={() => setExpand(false)}
              >
                <UnfoldLessIcon/>
              </Button>
            </>
          }
          {!expandAll && 
            <>
              <Tooltip id={'expand_all'}><b>Expand</b></Tooltip>
              <Button 
                variant="text" 
                data-tooltip-id={"expand_all"} 
                data-tooltip-place="left"
                onClick={() => setExpand(true)}
              >
                <UnfoldMoreIcon/>
              </Button>
            </>
          }
          <Tooltip id={'refresh'}><b>Refresh</b></Tooltip>
          <Button 
            variant="text" 
            data-tooltip-id={"refresh"} 
            data-tooltip-place="left"
            onClick={() => getConversations()}
          >
            <RefreshIcon/>
          </Button>
        </div>
      </div>
      <div>
        {filterList.map((filter) => {
          if(filter.filterType === 'read'){
            return (
              <div style={{...filterRowStyle, maxWidth:'420px'}}>
                <Button style={{marginRight:'10px'}} onClick={()=> deleteFilter(filter.id)} color="error" variant='contained'><CloseIcon/></Button>
                <ToggleButtonGroup
                  color="primary"
                  value={filter.value}
                  exclusive
                  onChange={() => updateFilter(filter.id, filter.value === 'Show Read Only' ? 'Show Unread Only' : 'Show Read Only')}
                >
                  <ToggleButton value="Show Read Only">Show Read Only</ToggleButton>
                  <ToggleButton value="Show Unread Only">Show Unread Only</ToggleButton>
                </ToggleButtonGroup>
              </div>
            )
          }
          if(filter.filterType === 'date'){
            return (
              <div style={{...filterRowStyle, maxWidth:'400px'}}>
                <Button style={{marginRight:'20px'}} onClick={()=> deleteFilter(filter.id)} color="error" variant='contained'><CloseIcon/></Button>
                <FormControl style={{marginRight:'20px'}} variant="standard">
                  <Select
                    value={filter.value.operation}
                    onChange={(event) => updateFilter(filter.id, {date: filter.value.date, operation:event.target.value})}
                  >
                    <MenuItem value={'Before'}>Before</MenuItem>
                    <MenuItem value={'After'}>After</MenuItem>
                    <MenuItem value={'Equal'}>Equal</MenuItem>
                  </Select>
                </FormControl>
                <DatePicker selected={filter.value.date} onChange={(date) => updateFilter(filter.id, {date, operation:filter.value.operation})} />
              </div>
            )
          }
          if(filter.filterType === 'messages'){
            return (
              <div style={{...filterRowStyle, maxWidth:'400px'}}>
                <Button style={{marginRight:'20px'}} onClick={()=> deleteFilter(filter.id)} color="error" variant='contained'><CloseIcon/></Button>
                <FormControl style={{marginRight:'20px'}} variant="standard">
                  <Select
                    value={filter.value.operation}
                    onChange={(event) => updateFilter(filter.id, {text: filter.value.text, operation:event.target.value})}
                  >
                    <MenuItem value={'Contains'}>Contains</MenuItem>
                    <MenuItem value={'Does Not Contain'}>Does Not Contain</MenuItem>
                  </Select>
                </FormControl>
                <TextField value={filter.value.text} onChange={(event) => updateFilter(filter.id, {text:event.target.value, operation:filter.value.operation})} />
              </div>
            )
          }
        })}
      </div>
      
      {sortedAndFilteredConvos.map((convo) => {
        const color = convo.read ? '#e4e3e3' : 'white';
        return (
          <Accordion expanded={convo.expanded} onChange={handleExpandChange(convo.date)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{backgroundColor:color}}>
                <div style={panelTitleStyle}>{dateToDisplayString(convo.date)}</div>
            </AccordionSummary>
            <AccordionDetails style={{backgroundColor:color, paddingTop:0}}>
                {convo.messageList.map((message) => 
                  <>
                    <div style={{fontWeight:800}}>{message.sender}</div>
                    <div>{message.message}</div>
                  </>
                )}
                {convo.read && 
                  <Button 
                    style={{marginTop:'15px'}} 
                    variant="contained" 
                    size="small" 
                    color="secondary"
                    onClick={()=>updateReadStatus(convo, false)}
                  >
                    Mark as Unread
                  </Button>
                }
                {!convo.read && 
                  <Button 
                    style={{marginTop:'15px'}} 
                    variant="contained" 
                    size="small" 
                    color="primary"
                    onClick={()=>updateReadStatus(convo, true)}
                  >
                    Mark as Read
                  </Button>
                }
                <Button 
                  style={{marginTop:'15px', marginLeft:'15px'}} 
                  variant="contained" 
                  size="small" 
                  color="error"
                  onClick={()=>deleteConversation(convo)}
                >
                  Delete
                </Button>
            </AccordionDetails>
          </Accordion>
      )})}
    </div>
  );
}