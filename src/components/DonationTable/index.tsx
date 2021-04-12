import React, { useCallback, useEffect, useState } from "react";

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
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fakeDonations } from "../../mockedData/mockedData";

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
  
  function createData(id:string,name: string, cc_number: string, cupons_number: number, donation_amount: string, donation_date: string) {
    return {id, name, cc_number, cupons_number, donation_amount, donation_date };
  }
  

  

const DonationTable : React.FC<DonationProps> =({children,
  Doacoes,
...rest})=>{

    const classes = useStyles();
    
    const [currentDonation, setCurrentDonation] = useState<Doacao>(fakeDonations[0]);

    const [open, setOpen] = useState(false);



    const handleClickOpenDialog=  useCallback(
      (data:any) => {
        setCurrentDonation(data);
        setOpen(true);
        // setCurrentDonation((state)=>{
        //   console.log(state);
        //   //setOpen(true);
        //   return state;
        // });
      },
      [],
    )
  

    function handleClose() {
      setOpen(false);
    }


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
            <StyledTableCell align="right">Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Doacoes?Doacoes.map((row) => (
            <StyledTableRow key={row.Instituicao.nome}>
              <StyledTableCell component="th" scope="row">
                {row.Instituicao.nome}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Pagamento.NumeroCartao}</StyledTableCell>
              <StyledTableCell align="right">{row.Cupom.length}</StyledTableCell>
              <StyledTableCell align="right">{"R$" + row.ValorInstituicao}</StyledTableCell>
              <StyledTableCell align="right">{row.DataDoacao.toLocaleDateString("pt-BR")}</StyledTableCell>
              <StyledTableCell align="right">
                <Button  variant="outlined" color="primary" onClick={()=>{handleClickOpenDialog(row)}}>Abrir</Button>
              </StyledTableCell>
            </StyledTableRow>
          )):"Empty"}
        </TableBody>
      </Table>


      {/* DIALOG  */}


      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{currentDonation.Instituicao.nome}</DialogTitle>

      <DialogContent>

        <DialogContentText id="alert-dialog-description">
          Veja aqui os cupons relacionados à esta doação de forma fácil

        </DialogContentText>
        <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell>Cupom</StyledTableCell>
            <StyledTableCell align="right">Descrição</StyledTableCell>
            <StyledTableCell align="right">Empresa</StyledTableCell>
            <StyledTableCell align="right">Validade</StyledTableCell>
            <StyledTableCell align="right">Ativo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentDonation && currentDonation.Cupom ? currentDonation.Cupom.map((cupom) => {
            
            return(
            <StyledTableRow key={cupom.Nome}>
              <StyledTableCell component="th" scope="row">
                {cupom.Nome}
              </StyledTableCell>
              <StyledTableCell align="right">{cupom.Descricao}</StyledTableCell>
              <StyledTableCell align="right">{cupom.EmpresaParceria.nome}</StyledTableCell>
              <StyledTableCell align="right">{cupom.DataValidade.toLocaleDateString("pt-BR")}</StyledTableCell>
              <StyledTableCell align="right">{cupom.Ativo ? "Ativo" : "Vencido"}</StyledTableCell>
            </StyledTableRow>
            )
            }) : "Loading"}
        </TableBody>
      </Table>
      </DialogContent>

    </Dialog>

    </TableContainer>
    )
}

export default DonationTable;