import React, { Component } from 'react';
import Cards from './Cards';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class Api extends Component {
    
    static defaultProps = {
        country: 'in',
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    };
    const

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            error: null
        };
    }

    async componentDidMount() {
        this.fetchArticles();
    }
    

    fetchArticles = async () => {
        const { page } = this.state;
        const { country, category } = this.props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0770f2a3521d40c5b3351541d77f49c1&page=${page}&pageSize=16`;

        this.setState({ loading: true, error: null });

        try {
            const response = await fetch(url);
            const parsedData = await response.json();
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults
            });
        } catch (error) {
            this.setState({ error: error.message });
        } finally {
            this.setState({ loading: false });
        }
    };

    handlePrevClick = () => {
        this.setState(prevState => ({ page: prevState.page - 1 }), this.fetchArticles);
    };

    handleNextClick = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchArticles);
    };

    render() {
        const { articles, loading, page, totalResults, error } = this.state;
       
        return (
            <div className="container my-3">
                <h2 className="text custom-hover" style={{ color: 'white', borderColor: 'blue', font: '25px' }}>
                    NewsBook - {this.props.category} Headlines
                </h2>
                {loading && <Spinner />}
                {error && <div>Error: {error}</div>}
                <div className="row">
                    {articles.map(element => (
                        <div className="col-md-3 kilas" key={element.url}>
                            <Cards
                                title={element.title.slice(0, 40) + '...'}
                                description={element.description ? element.description.slice(0, 60) :""}
                                imageurl={element.urlToImage}
                                
                                newsurl={element.url}/>
                                
                        </div>
                    ))}{!loading &&(
                    <div className="d-flex justify-content-between"> 
                        <button
                            type="button"
                            disabled={page <= 1}
                            className="btn btn-outline-primary"
                            onClick={this.handlePrevClick}>
                            &larr; Previous
                        </button>
                        <button
                            type="button"
                            disabled={page * 16 >= totalResults}
                            className="btn btn-outline-primary"
                            onClick={this.handleNextClick}>
                            Next &rarr;
                        </button>
                    </div>
    )}
                </div>
                
            </div>
        );
    }
}
