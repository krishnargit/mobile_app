var React = require('react');
var ReactDOM = require('react-dom');

var WebDisplay = function() {
  return (
    <div class="container">
      <h1>Mass Mutual</h1>
      <table className="table table-condensed">
        <tr >
          <th className="row"><img  src={'MassMutual_Card.jpg'}  alt="Mass Mutual Card" /></th>
        </tr>
        <tr >
          <th className="row"><h2>Card Title  </h2></th>
        </tr>
        <tr>
          <th className="row"><input className="button" type="button" value="Button" /></th>
        </tr>
        <tr >
          <th className="row"><img  src={'MassMutual_Card.jpg'}  alt="Mass Mutual Card" /></th>
        </tr>
        <tr >
          <th className="row"><h2>Card Title  </h2></th>
        </tr>
        <tr>
          <th className="row"><a href="" >link</a></th>
        </tr>
        <tr >
          <th className="row"><img  src={'MassMutual_Card.jpg'}  alt="Mass Mutual Card" /></th>
        </tr>
        <tr >
          <th className="row"><h2>Card Title  </h2></th>
        </tr>
        <tr>
          <th className="row">Just text</th>
        </tr>
        <tr>
          <th className="row">Legal text</th>
        </tr>
      </table>
    </div>
  );
};

ReactDOM.render(<WebDisplay />, document.getElementById('root'));
