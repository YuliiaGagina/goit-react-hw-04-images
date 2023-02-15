import css from './Button.module.css'


function Button  ({showMore}) {
    return (
        <button onClick={showMore}  type='button' className={css.Button}>Load More</button>
    )
}

export default Button