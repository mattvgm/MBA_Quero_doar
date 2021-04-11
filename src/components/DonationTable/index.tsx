import React from "react";
import PropTypes from 'prop-types';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {HiOutlineUserCircle,HiHeart ,HiHome ,HiIdentification, HiGift} from "react-icons/hi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import {Doacao} from "../../models/Doacao"

export interface DonationProps {
 Doacoes:Doacao[]
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#3d80cc",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
    
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name: string, cc_number: string, cupons_number: number, donation_amount: string, donation_date: string) {
    return { name, cc_number, cupons_number, donation_amount, donation_date };
  }
  
  const rows = [
    createData('Amigos da rua', "XXXX XXXX XXXX 7896", 6, "R$24,00", "14/03/2021"),
    createData('Leões da noite', "XXXX XXXX XXXX 1237", 9, "R$37,00", "24/02/2021"),
    createData('SP sem fome', "XXXX XXXX XXXX X262", 16, "R$60,00", "05/01/2021"),
    createData('VIVA', "XXXX XXXX XXXX X305", 3, "R$100,00", "21/12/2020"),
    createData('Criança Feliz', "XXXX XXXX XXXX X356", 4, "R$15,00", "20/12/2020"),
  ];

const DonationTable : React.FC<DonationProps> =({children,
  Doacoes,
...rest})=>{
    const classes = useStyles();

    console.log("oi");
    console.log(Doacoes);

    const donations = Doacoes.map((d)=>{
      return createData(d.Instituicao.nome,d.Pagamento.NumeroCartao,1,"R$" + d.ValorInstituicao.toString(),d.DataDoacao.toLocaleDateString("pt-BR"))
    })


    return(


<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Instituição</StyledTableCell>
            <StyledTableCell align="right">Cartão</StyledTableCell>
            <StyledTableCell align="right">Cupons</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
            <StyledTableCell align="right">Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cc_number}</StyledTableCell>
              <StyledTableCell align="right">{row.cupons_number}</StyledTableCell>
              <StyledTableCell align="right">{row.donation_amount}</StyledTableCell>
              <StyledTableCell align="right">{row.donation_date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default DonationTable;