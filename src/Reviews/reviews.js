import React, { Component } from 'react';

class Reviews extends Component{
  constructor(props){
    super(props);
    this.state = {isLoaded: false, items: []}
  }
  componentDidMount() {
    var apiKey = "87995d13c4cd4b608b9ccdf6e59d2124";
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey;

    console.log('---url: '+ url)
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }


  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.display_title}>
              {item.headline}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default Reviews;
