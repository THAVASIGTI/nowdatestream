import './App.css';
import React, { useState } from 'react';
import AnalogueClock from 'react-analogue-clock';
import { Container, Row, Col } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';

function App() {
    const [view_tick, set_tick] = useState(0);
    const [Gmt,setGMT] = useState(0);
    const [value, onChange] = useState(new Date());
    const [timeZone,setTimeZone] = useState(0);
    const [timeStamp,setTimeStamp] = useState(new Date());
    const clockOptions = {
        baseColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 4,
        centerColor: '#000000',
        handColors: {
            hour: '#000000',
            minute: '#000000',
            second: '#000000',
        },
        notchColor: '#000000',
        numbersColor: '#000000',
        showNumbers: true,
        size: 250
    }
    return (
        <div className="App">
            <header id="header">
                <a href="#">Home</a>
                <a href="#">Policy</a>
                <a href="#">Content</a>
            </header>
            <div id="main">
                <Container id="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Row>
                        <Col><p id="title-epoch">Epoch & Unix Timestamp Conversion Tools</p></Col>
                        <Col>
                            <center id="analog-clock">
                                < AnalogueClock {...clockOptions} />
                            </center>
                        </Col>
                        <Col><h3>The Current Epoch Unix Timestamp</h3></Col>
                        <Col>
                            {tick(set_tick)}
                            <b style={{ fontSize: "40px" }}>{view_tick}</b><br/>SECONDS SINCE JAN 01 1970. (UTC)
                        </Col>
                        <Col>
                            <h3>Enter a Timestamp</h3>
                            <input type="number" name="timestamp" id="input-timestamp" placeholder="1619339207" /><br/><br/>
                            <button type="button" id="btn-timestamp" onClick={() => timeStampToDate(setGMT, setTimeZone)}  >Convert 	&#8594;</button><br/>
                            <span>
                                <table className="center" align="right" border="1" id="table-input" style={{ display: "none" , width:"100%"}}>
                                    <tr>
                                        <th width="200" className="table-row-1">GMT</th>
                                        <td className="table-row-2">{Gmt}</td>
                                    </tr>
                                    <tr>
                                        <th width="200" className="table-row-1">Your Local Time</th>
                                        <td className="table-row-2">{timeZone}</td>
                                    </tr>
                                </table>
                            </span>
                        </Col>
                        <Col>
                            <br /><h3>Enter a Date & Time</h3>
                            <center>
                                <b>
                                    <h1>
                                        <DateTimePicker onChange={onChange} value={value} format={"dd-MM-y h:mm:ss a"} showLeadingZeros={true} required={true} />
                                    </h1>
                                </b>
                            </center>
                            <button type="button" id="btn-timestamp" onClick={() => DateToTimestamp(value,setTimeStamp)}  >Convert 	&#8594;</button><br/>
                            <span>
                                <table className="center" align="right" border="1" id="table-input-1" style={{ display: "none" , width:"100%"}}>
                                    <tr>
                                        <th width="200" className="table-row-1">Unix Timestamp	</th>
                                        <td className="table-row-2">{timeStamp.getTime()}</td>
                                    </tr>
                                    <tr>
                                        <th width="200" className="table-row-1">GMT</th>
                                        <td className="table-row-2">{timeStamp.toGMTString()}</td>
                                    </tr>
                                    <tr>
                                        <th width="200" className="table-row-1">Your Local Time</th>
                                        <td className="table-row-2">{timeStamp.toString()}</td>
                                    </tr>
                                </table>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer id="footer">
                <div id="footer-id">
                    <br />powered by <a href="#" id="footer-id-a">todolib.in</a><br /><br />
                    <p>© 2021 Todo Lib's & Gti<br /><br />
                    Contact Us Privacy Policy</p>
                </div>
            </footer>
        </div>
    );
}

function DateToTimestamp(value,setTimeStamp){
    if (value){
        setTimeStamp(value)
        document.getElementById('table-input-1').style.display = "block";
    }else{
        console.log("no")
    }
}

function timeStampToDate(setGMT,setTimeZone){
    var valueOfInput = document.getElementById('input-timestamp').value
    if (valueOfInput.length > 0){
        var conv_data_obj = new Date(parseInt(valueOfInput))
        if (conv_data_obj.valueOf()){
            console.log(conv_data_obj)
            setTimeZone(conv_data_obj.toString())
            setGMT(conv_data_obj.toGMTString())
            console.log(conv_data_obj.toGMTString())
            document.getElementById('table-input').style.display = "block";
        }else{
            console.log("not valid")
        }
    }else{
        console.log("Input Is Empty")
    }
}

function tick(set_tick) {
    setTimeout(() => {
        set_tick(Math.round(new Date().getTime() / 1000));
    }, 1000)
}

export default App;
