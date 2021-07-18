import { Component } from 'react';
import './App.scss';
import Loader from './Loader';
import Navbar from './Navbar';
import Stories from './Stories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStories: [],
      query: '',
      isLoading: false,
      err: false,
      message: '',
    };
  }

  querySearch = async (query) => {
    this.setState({ isLoading: true });
    try {
      let res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&tags=front_page&hitsPerPage=50`);
      let data = await res.json();
      this.setState({ allStories: data.hits, isLoading: false });

      if (this.state.allStories.length === 0) {
        this.setState({ err: true, message: `Sorry no results matched your search` });
      } else {
        this.setState({ err: false, message: `` });
      }
    } catch (err) {
      this.setState({ err: true, message: `Sorry no results matched your search`, isLoading: false });

      console.log(err);
    }
  };
  componentDidMount = () => {
    this.querySearch(this.state.query);
  };

  render() {
    return (
      <div className='App container-change'>
        <header>
          <Navbar querySearch={this.querySearch} />
        </header>
        <section className='section'>
          {this.state.err && <div>{this.state.message}</div>}
          <Loader isLoading={this.state.isLoading} />
          {!this.state.err && <Stories allStories={this.state.allStories} />}
        </section>
      </div>
    );
  }
}

export default App;
