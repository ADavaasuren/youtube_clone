import React from 'react';
import VideoRow from './VideoRow';
import './TrendingPage.css';



function TrendingPage() {

  return (
      <div className="trendingPage">
        <div className="trending__outside">
          <figure className="trending__inside">
              <div className="trending__icon">
                <div className="image__icon">
                  <img 
                    className="image"
                    width="80"
                    src={`${process.env.PUBLIC_URL}/assets/music.png`} 
                    alt="music" 
                  />
                </div>
                <figcaption id="title" className="image__icon">Music</figcaption>
              </div>
              <div className="trending__icon">
                <div className="image__icon">
                  <img 
                    className="image"
                    width="80"
                    src={`${process.env.PUBLIC_URL}/assets/gaming.png`} 
                    alt="gaming"
                  />
                </div>  
                <figcaption id="title" className="image__icon">Gaming</figcaption>
              </div>
              <div className="trending__icon">
                <div className="image__icon">
                  <img
                    className="image" 
                    width="80"
                    src={`${process.env.PUBLIC_URL}/assets/news.png`} 
                    alt="news"
                  />
                </div>
                <figcaption id="title" className="image__icon">News</figcaption>
              </div>
              <div className="trending__icon">
                <div className="image__icon">
                  <img 
                    className="image"
                    width="80"
                    src={`${process.env.PUBLIC_URL}/assets/movies.png`} 
                    alt="movies"
                  />
                </div>
                <figcaption id="title" className="image__icon">Movies</figcaption>
              </div>
          </figure>
        </div>
          
        <div className="video__row">
          <VideoRow 
                views="1M"
                description="In Het Jachtseizoen nemen Giel, Thomas en Stefan het iedere week op tegen een nieuwe uitdager. Wie blijft er uit handen van StukTV? Speel en film zelf ook Het Jachtseizoen met onze app en maak..."
                timestamp="21 hours ago"
                channel="StukTV"
                title="Enzo Knol op de Vlucht - Jachtseizoen'20 #1"
                image="https://i.ytimg.com/vi/1K-rCjCJqFs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBOXqomLNbF61LrwShE9zbH8RFGrQ"
          />

          <VideoRow 
                views="337K"
                description="Stream Drill / Dat is Gangster Op jouw favorieten Streaming diensten.Drill: https://fanlink.to/tur-g-drill
                Dat is gangster: https://fanlink.to/tur-g-dat-is-gangster.De afgelopen tijd is..."
                timestamp="2 days ago"
                channel="JET Music"
                title="Tur-G - Drill / Dat is Gangster (Prod. by 6aby & Lyon-Beats)"
                image="https://i.ytimg.com/vi/3mRx9Myc4jk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBxS3hZqYwgHQdoaAGiHutIs88WQA"
          />

          <VideoRow 
                views="489K"
                subs=""
                description="Stef Bos & Miss Montreal - Laat me | Beste Zangers 2020"
                timestamp="2 days ago"
                channel="AVROTROS"
                title="Stef Bos & Miss Montreal - Laat me | Beste Zangers 2020"
                image="https://i.ytimg.com/vi/zfmAqZQz94E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA3dEiYotzVGQUJpn5DfQI692BfQQ"
          />
        </div>
      </div>

    );
}


export default TrendingPage;