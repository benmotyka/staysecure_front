import {Container, Header, Line, Content} from "./Article.styles"
const Article = (props) => {
    return (
        <Container>
            <Header>{props.name}</Header>
            <Line/>
          <Content>{props.description}</Content>
        </Container >
    )
}

export default Article
