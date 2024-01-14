import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color:#aaa;
  font-size: .8rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width:100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top:25px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured({product}) {
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>
                {product.description}
              </Desc>
              <ButtonWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read More</ButtonLink>
                <Button white>
                  <CartIcon/>
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <div>
              <img src="https://next-ecommerce-test0.s3.amazonaws.com/1702826725747.png" />
            </div>
          </Column>
        </ColumnWrapper>
        
      </Center>
    </Bg>
  );
}