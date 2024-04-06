import { useSelector } from 'react-redux';

export function Chip(props) {
    const theme = useSelector(state => state.theme);
    
    const chipStyle = {
        borderRadius: '1rem',
        border: '1px solid ' + theme.colors.chip,
        color: theme.colors.chip,
        padding: '0.5rem 1rem 0.5rem 1rem',
        fontSize: '12px',
        fontWeight: '600'
    };

    return (
        <div style={chipStyle}>
            {props.text}
        </div>
    );
}
