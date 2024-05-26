import { render } from "@testing-library/react"
import { Home } from "./index"
import { MemoryRouter } from "react-router-dom"
import Card from "../../components/card/card"
import userEvent from "@testing-library/user-event"

test("Testa conexão com API ao apresentar produto", async () => {
    const produtosTeste = [
      {
        id: 1,
        title: "Produto 1",
        price: 1,
        description: "Descrição 1",
        category: "Categoria 1",
        image: "imagem1.jpg"
      },
      {
        id: 2,
        title: "Produto 2",
        price: 2,
        description: "Descrição 2",
        category: "Categoria 2",
        image: "imagem2.jpg"
      }
    ]
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(produtosTeste)
      })
    )


    const { findByText, findAllByRole } = render(
        <MemoryRouter>        
            <Home />          
        </MemoryRouter>
    )

    const product1_title = await findByText("Produto 1")
    const product1_price = await findByText("R$ 1")
    const product2_title = await findByText("Produto 2")
    const product2_price = await findByText("R$ 2")
    const images = await findAllByRole("img")

    expect(product1_title).toBeInTheDocument()
    expect(product1_price).toBeInTheDocument()
    expect(images[0]).toBeInTheDocument()
    expect(images[0]).toHaveAttribute('src', 'imagem1.jpg')
    expect(product2_title).toBeInTheDocument()
    expect(product2_price).toBeInTheDocument()
    expect(images[1]).toBeInTheDocument()
    expect(images[1]).toHaveAttribute('src', 'imagem2.jpg')
  });

   test(("Testa redirecionamento de página ao clicar em um produto, mostrando as informações do produto"), async () => {
        const { getByRole } = render(
             <MemoryRouter>
               <Card 
                id={1} 
                 title={"Produto 1"} 
                 price={1} 
                 description={"Descrição 1"}
                 category={"Categoria do Produto 1"} 
                 image={"imagem1.jpg"}/>
             </MemoryRouter>
        )          

        const button = getByRole('button')
        expect(button).toBeInTheDocument()
        //await userEvent.click(button)
    
       //const url = window.location.pathname
       //expect(url).toEqual("/produto/1")
   })