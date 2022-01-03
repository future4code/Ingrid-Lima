import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import {
  GeneralContainer,
  LeftCol,
  RightCol,
  TitleWrap,
  Title,
  LogoLoterias,
  NumbersWrap,
  GameTitle,
  GameNumberDate,
  Obs,
} from "./style"
import logoLoterias from "../../images/logo_cef.svg"
import NumbersList from "../../components/NumbersList/NumbersList"

const Lotofacil = () => {
  const [relacaoConcurso, setRelacaoConcurso] = useState([])
  const [concursoId, setConcursoId] = useState("")
  const [concursos, setConcursos] = useState([])

  const getRelacaoConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setRelacaoConcurso(res.data[2])
        if (relacaoConcurso) {
          setConcursoId(res.data[2].concursoId)
        }

       
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getConcursosById = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setConcursos(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getRelacaoConcursos()
  }, [])

  useEffect(() => {
    if (concursoId) getConcursosById(concursoId)
  }, [concursoId])

  const data = new Date(concursos?.data)
  const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })

  return (
    <GeneralContainer>
      <LeftCol></LeftCol>
      <TitleWrap>
        <LogoLoterias src={logoLoterias} />
        <Title>LOTOFÁCIL</Title>
      </TitleWrap>
      <GameTitle>
        <p>CONCURSO  {concursos.id}</p>
      </GameTitle>
      <GameNumberDate>
        <p>
        {data && formatedDate}
        </p>
      </GameNumberDate>
      <RightCol>
        <NumbersWrap>
          <ul>
            {concursos.numeros &&
              concursos.numeros.map((item) => (
                <NumbersList numbers={item} key={item} />
              ))}
          </ul>
        </NumbersWrap>
        <Obs>
          Este sorteio é meramente ilustrativo.
        </Obs>
      </RightCol>
    </GeneralContainer>
  )
}

export default Lotofacil