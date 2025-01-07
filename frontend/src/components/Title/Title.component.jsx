import './Title.styles.scss';

export const Title = ({ href, title }) => {
    console.log(`Yeeeeep - this is just for testing`)
    
    const timer = setTimeout(() => {
        console.log(`Yeeeeep - this is just for testing`)
    }, 1000)

    return (
        <div className="imgContainer">
            <img src={href} alt={title} />
        </div>
    )
}