import styles from './archives.module.scss'

export default function Archives() {
    const months = [
        {
            month : 'March',
            year : '2014'
        },
        {
            month : 'Feburary',
            year : '2014'
        },
        {
            month : 'January',
            year : '2014'
        },
        {
            month : 'December',
            year : '2013'
        },
        {
            month : 'November',
            year : '2013'
        },
        {
            month : 'October',
            year : '2013'
        },
        {
            month : 'September',
            year : '2013'
        },
        {
            month : 'August',
            year : '2013'
        },
        {
            month : 'July',
            year : '2013'
        },
        {
            month : 'June',
            year : '2013'
        },
        {
            month : 'May',
            year : '2013'
        },
        {
            month : 'April',
            year : '2013'
        },
    ];
    return(
        <div className={`${styles.about}`}>
           <h5>Archives</h5>
           <ul>
                {
                    months.map((data, index) => {
                        return <li key={index}><a href="#">{data.month} {data.year}</a></li>
                    })
                }
           </ul>
        </div>
    )
}