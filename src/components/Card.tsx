import React from 'react';
import { Link } from 'react-router-dom';





interface ICardProperties {
  id?:string;
  title: string | null | undefined;
  content?: string;
  
}

const cardImage = [
  'https://aadhmqulyo.cloudimg.io/v7/essential-addons.com/elementor/wp-content/uploads/2020/10/Blog_Banner__1280x720@2x.jpg',
  'https://wpnews.io/wp-content/uploads/2020/10/EmbedPressUpdateHowToFixInstagramOrFacebookEmbedIssuesInWordPress.png',
  'https://i.ytimg.com/vi/XjwLT-_RmTs/maxresdefault.jpg',
  'https://media-exp1.licdn.com/dms/image/C5634AQFvXXfR8OA04A/ugc-proxy-shrink_800/0/1616320088691?e=2159024400&v=beta&t=2VCNdFC4RDkcSz5ohrdqfa1FX1rx4TF4FnnQV8w2Vbg',
] as const;

const Card: React.FC<ICardProperties> = ({title,id}) => {
  
  return (
    <div className='grid-item'>
      <article className='post tag-romance'>
        <img src={cardImage[2]}  alt="card"/>
        <div className='wrapgriditem'>
          <header className='post-header'>
            <h2 className='post-title'>
             
            <Link to = {`/posts/${id}`}>{title}</Link>
            <div>{id}</div>
            </h2>
          </header>
          
          
        </div>
      </article>
    </div>
  );
};

export default Card;
