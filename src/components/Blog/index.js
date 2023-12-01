import styles from './blog.module.scss'

export default function Blog({
    inputValue,
    isArticle,
    isMultipleArticle,
}) {
    console.log('inputValue',inputValue);
    let dateConvert = new Date(inputValue.blogdate);
    let dateFormatted = dateConvert.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
    return(
        <>
        <div className={`${styles.blog}`}>
           <h5>From the Firehouse</h5>
           <Sampleblog title={`Sample blog post`} date={`January 1, 2014 by `} author={`Mark`} content1={`This blog post shows a few different types of content that's supported and styled with Bootstrap.Basic typography `} content2={`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.`} />
           <Sampleblog title={`Another blog post`} date={`December 23, 2013 by `} author={`Jacob`} content1={`This blog post shows a few different types of content that's supported and styled with Bootstrap.Basic typography `} content2={`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.`} />
           <Sampleblog title={`New feature`} date={`December 14, 2013 by `} author={`Chris`} content1={`This blog post shows a few different types of content that's supported and styled with Bootstrap.Basic typography `} content2={`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.`} />
            {
                isMultipleArticle.map((data) => {
                    console.log('isMultipleArticle', data)
                    return(
                        <Sampleblog 
                        title={inputValue.blogheading} 
                        date={`${dateFormatted == 'Invalid Date' ? '' : dateFormatted} by `} 
                        author={inputValue.blogauthor} 
                        content1={inputValue.blogcontent} />
                    )
                })
                
            }
        </div>
        <div className={`${styles.button__wrap}`}>
            <button className={`button button__primary`}>Older</button>
            <button disabled className={`button button__secondary`}>Newer</button>
        </div>
        </>
    )
}

function Sampleblog({
    title,
    date,
    author,
    content1,
    content2,
}){
    return(
        <article>
            <h4>{title}</h4>
            <div className={`${styles.date}`}>{date}<mark>{author}</mark></div>
            <p>{content1}</p>
            <hr/>
            <p>{content2}</p>
        </article>
    )
}