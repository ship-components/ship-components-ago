/**
 * Example
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Ago from '../src/Ago'

var time = new Date().getTime();

function date(time) {
  return new Date(time).toUTCString();
}


const seconds = date(time - 5000);
const minutes = date(time - 140000);
const hours = date(time - 4.32 * Math.pow(10, 7));
const days = date(time - 4.32 * Math.pow(10, 8));
const weeks = date(time - 1.21 * Math.pow(10, 9));
const months = date(time - 6.48 * Math.pow(10, 9));
const years = date(time - 4.32 * Math.pow(10, 11));
const current = date(time);

export default class Examples extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>{'Examples Page'}</h1>
        <div>
            <h1>{'Usage by timeframe'}</h1>
            <hr></hr>
            All times were compared relative to current UTC time at: <br></br><h2>{date(time)}</h2> 
            <br></br>There are two formats, first is normal, and the second is Twitter formatted, which is more suitable for smaller components such as comments.
            <div>
              <h2>Just now</h2>
              <div>{current}</div>
              Normal - <Ago date={current} /> <br></br>
              Twitter - <Ago twitter date={Date.now()} />
            </div>

            <div>
            <h2>Seconds</h2>
              <div>{seconds}</div>
              Normal - <Ago date={seconds} /> <br></br>
              Twitter - <Ago twitter date={seconds} />
            </div>
            
            <div>
              <h2>Minutes</h2>
              <div>{minutes}</div>
              Normal - <Ago date={Date.now() - 120 * 1000} /> <br></br>
              Twitter - <Ago twitter date={Date.now() - 120 * 1000} />
            </div>

            <div>
              <h2>Hours</h2>
              <div>{hours}</div>
              Normal - <Ago date={hours} /> <br></br>
              Twitter - <Ago twitter date={hours} />
            </div>

            <div>
              <h2>Days</h2>
              <div>{days}</div>
              Normal - <Ago date={days} /> <br></br>
              Twitter - <Ago twitter date={days} />
            </div>

            <div>
              <h2>Weeks</h2>
              <div>{weeks}</div>
              Normal - <Ago date={weeks} /> <br></br>
              Twitter - <Ago twitter date={weeks} />
            </div>

            <div>
              <h2>Months</h2>
              <div>{months}</div>
              Normal - <Ago date={months} /> <br></br>
              Twitter - <Ago twitter date={months} />
            </div>

            <div>
              <h2>Years</h2>
              <div>{years}</div>
              Normal - <Ago date={years} /> <br></br>
              Twitter - <Ago twitter date={years} />
            </div>

        </div>


        <div>
            <h1>{'使い方'}</h1>
            <hr></hr>
            只今 <br></br><h2>{date(time)}</h2> 
              <h2>Just now</h2>
              <div>{current}</div>
              Normal - <Ago date={current} locale="ja" /> <br></br>
              Twitter - <Ago locale="ja" twitter date={Date.now()} />
            </div>

            <div>
            <h2>Seconds</h2>
              <div>{seconds}</div>
              Normal - <Ago locale="ja" date={seconds} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={seconds} />
            </div>
            
            <div>
              <h2>Minutes</h2>
              <div>{minutes}</div>
              Normal - <Ago locale="ja" date={Date.now() - 120 * 1000} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={Date.now() - 120 * 1000} />
            </div>

            <div>
              <h2>Hours</h2>
              <div>{hours}</div>
              Normal - <Ago locale="ja" date={hours} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={hours} />
            </div>

            <div>
              <h2>Days</h2>
              <div>{days}</div>
              Normal - <Ago locale="ja" date={days} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={days} />
            </div>

            <div>
              <h2>Weeks</h2>
              <div>{weeks}</div>
              Normal - <Ago locale="ja" date={weeks} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={weeks} />
            </div>

            <div>
              <h2>Months</h2>
              <div>{months}</div>
              Normal - <Ago locale="ja" date={months} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={months} />
            </div>

            <div>
              <h2>Years</h2>
              <div>{years}</div>
              Normal - <Ago locale="ja" date={years} /> <br></br>
              Twitter - <Ago locale="ja" twitter date={years} />
            </div>

        </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
