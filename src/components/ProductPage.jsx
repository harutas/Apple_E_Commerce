import Category from "./Category"

const ProductPage = (props) => {
  return (
    <div className="container pt-3">
      <Category products={props.products['Mac']} category={'Mac'} />
      <Category products={props.products['iPhone']} category={'iPhone'} />
      <Category products={props.products['iPad']} category={'iPad'} />
      <Category products={props.products['Watch']} category={'Watch'} />
    </div>
  )
}

export default ProductPage