// generics we will use <T> which stands for Type(any letter can be used)
type ListStriktedWithIDProps<T> = {
    items: T[]
    onClick: (value: T) => void
}
// T extends an empty object means least restriction when passing in props(take different value - like string number or object)
export const ListStriktedWithID = <T extends { id: number }>({items, onClick}: ListStriktedWithIDProps<T>) => {
    return (
        <div>
        <h2>List of items</h2>
        {items.map(item => {
            return (
            <div key={item.id} onClick={() => onClick(item)}>
                {item.id}
            </div>
            )
        })}
        </div>
    )
}



type ListProps = {
    items: string[] | number[]
    onClick: (value: string | number) => void
}
export const List = ({ items, onClick }: ListProps) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}