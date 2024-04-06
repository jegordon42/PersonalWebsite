export function Map(props) {
    const titleStyle = {
        marginBottom:'20px'
    }

    const textStyle = {
        marginBottom:'10px'
    }

    return (
        <div ref={props.sectionRef} style={{width:'110%', marginRight:'-70px', paddingTop:'100px'}}>
            <h2 style={titleStyle}>My Map Project</h2>
            <div style={textStyle}>Take a look at everywhere I've been on an embedded view of my latest passion project! I started this a couple of months ago when I wanted a way to display all my travel on a map and the idea has been snowballing into a whole web app with some cool features.</div>
            <iframe src={"https://joseph-gordon.com/life-events?embed=map"} height={'700px'} width={'100%'} style={{ borderRadius:'20px'}}/>
        </div>
        
    );
}
