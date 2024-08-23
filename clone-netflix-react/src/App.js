
import React, { Component } from 'react';
import './CustomCss.css';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import WelcomeSection from './components/WelcomeSection';

class App extends Component {
  state = {
    selectedCategory: 'Action' // Categoria iniziale
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { selectedCategory } = this.state;

    return (
      <div className="App">
        <Header/>
        <WelcomeSection></WelcomeSection>
        
        <FirstSection
          selectedCategory={selectedCategory}
          onCategorySelect={this.handleCategorySelect}
        />
        <MovieRow query={selectedCategory} title={selectedCategory} />
        <Footer/>
      </div>
    );
  }
}

export default App;
