import React, { Component } from "react";
import Cards from "./Cards";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Error from "./Error";
export default class Api extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    lang: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      error: null,
      renderedArticles: new Set(),
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.category !== this.props.category ||
      prevProps.lang !== this.props.lang
    ) {
      this.fetchArticles();
    }
  }

  handleLangChange = (newLang) => {
    this.setState({ lang: newLang });
  };

  fetchArticles = async () => {
    const { category, country, lang } = this.props;
    const primaryUrl = `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
      category
    )}&country=${country}&lang=${lang || "en"}`;
    const primaryOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f9b4821a05msh548781913574675p17c7c5jsn25222039beda",
        "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
      },
    };

    const fallbackUrls = [
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "2da5e14290mshbfc6a6f149bde14p1ef359jsn50ca1d982645",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "123002967bmsh224ab464dc16bf8p1984bbjsn1cec5dec99db",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "80b2f353bbmsh7b3e03dde1355b3p1af925jsn367451519b0d",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              " 842651eb43msh59f62711d15b876p1e86f0jsnd8c71abf1ab0",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },

      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "0e2321c389msh06414b7bca36abep1124bfjsnaad2ba88bf9e",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "9a60c08483msh757960ce6bfc9fbp14a7d4jsn7bda64d45387",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ec628048f1msh70d6dfea0d00792p142fb2jsn88db398adfbb",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "69a3390f44mshc830aea525d8d99p1f4223jsn65866d48cae8",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "d9e30a8627mshfa6b3dd5ec8c641p1b22edjsnd795a153ae1d",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "edd0a57942msh9888564b35495edp16e297jsnbd19393b0bc6",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },

      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "aa0ce3a9cfmsh5c0d3dffc801e90p184f16jsnebdb415bfcb1",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "20d33e0c42mshffbec9fdb9586b6p181088jsn37f539e29cdd",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              " 4a52af62e9mshd1dca7f4bad81a9p13d8fbjsnadd17f3d7f81",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6614f6c735msh56c9d915a317e80p17e394jsn1ccc0ef317bf",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6bd08c2774msh7bd56b34ecc7c8ep1b46f3jsn83b0027d6b94",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ef48737311msha06d300faadf8bfp1f7a23jsn18a46df2c8db",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "71d5c220ddmsh4834ff21b9bb67fp1a10c3jsn64a371f532bf",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "a747b31f99msh70f7165972d9331p14f55ejsn735ddaba1e0a",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6f16895eaamsh8d49d24fad6b1c2p18dd4djsn8b5e35fb1edf",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "3b631c1fd2msh4c1e235ca0e7f88p1256e0jsn94c5cc61b76c",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "5131c254fdmshb9f86ec012c7a1fp174637jsn9cf589a7bbe8",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "619044d388mshcef94a8421ab5e9p15773djsn7d1ca7acd6f4",
            "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "e584681e21msh9cc35bc509dc34dp1fe86cjsnd1e16045a5b3",
            "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "b16dcac11emsh4b99483c42e8ba0p143f40jsn41416e36d36c",
            "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
      {
        url: `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
          category
        )}&country=${country}&lang=${lang || "en"}`,
        options: {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "0bae7cac24mshafffbc032797ed6p127a8ajsnca1e8e1e548a",
            "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
          },
        },
      },
    ];

    this.setState({ loading: true, error: null, articles: [] });

    try {
      await this.fetchWithFallback(primaryUrl, primaryOptions, fallbackUrls);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  fetchWithFallback = async (primaryUrl, primaryOptions, fallbackUrls) => {
    try {
      const response = await fetch(primaryUrl, primaryOptions);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const result = await response.json();
      this.processArticles(result);
    } catch (primaryError) {
      
      for (const fallback of fallbackUrls) {
        try {
          const fallbackResponse = await fetch(fallback.url, fallback.options);
          if (!fallbackResponse.ok) {
            throw new Error(` Server Error: ${fallbackResponse.status}`);
          }
          const fallbackResult = await fallbackResponse.json();
          this.processArticles(fallbackResult);
          return;
        } catch (fallbackError) {
          
          continue;
        }
      }
      this.setState({ error: `Server Error : ${primaryError.message}` });
    }
  };

  processArticles = (result) => {
    const filteredArticles = result.data.filter(
      (article) => !this.state.renderedArticles.has(article.link)
    );
    this.setState((prevState) => ({
      articles: [...prevState.articles, ...filteredArticles],
      renderedArticles: new Set([
        ...prevState.renderedArticles,
        ...filteredArticles.map((article) => article.link),
      ]),
    }));
  };

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div className="container my-3">
        <h2
          className="text custom-hover"
          style={{ color: "white", borderColor: "blue", fontSize: "25px" }}
        >
          NewsBook - {this.props.category} Headlines
        </h2>
        {loading && <Spinner />}
        {error && <Error error23={error} />}
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-3 kilas" key={element.link}>
              <Cards
                title={element.title}
                description={
                  "Last updated " + element.published_datetime_utc.slice(0, 10)
                }
                imageurl={element.photo_url || "./public/default.png"} // Add a default image URL if needed
                newsurl={element.link}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export const loading = true;
