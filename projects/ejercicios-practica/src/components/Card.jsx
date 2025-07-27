export default function Card({children}) {
    return (
        <div className="card" style={{ width: "380px", marginBottom: "10px" }}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}


export function CardBody(props) {
    const { title, text } = props
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    )
} 