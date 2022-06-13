


export const Productitem = (props) => {

    console.log('props', props)
        return (
            <>
            
                <h1 key={props.data.id}>{props.data.name} ${props.data.price}</h1>
            </>
        )
}