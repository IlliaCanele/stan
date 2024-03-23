type Props = {
    name: string
    description: string
    stars: number
}

export function FoundRepo({name, description, stars}: Props) {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <div>
                    {stars} Stars
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}