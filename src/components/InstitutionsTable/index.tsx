import React, { useCallback, useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  HiOutlineUserCircle,
  HiHeart,
  HiHome,
  HiIdentification,
  HiGift,
} from "react-icons/hi";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import { Doacao } from "../../models/Doacao";
import { Button, Input, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Instituicao } from "../../models/Instituição";

export interface DonationProps {
  instituicoes: Instituicao[];
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#2360a6",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  id: string,
  name: string,
  cc_number: string,
  cupons_number: number,
  donation_amount: string,
  donation_date: string
) {
  return { id, name, cc_number, cupons_number, donation_amount, donation_date };
}

const InstitutionsTables: React.FC<DonationProps> = ({
  children,
  instituicoes,
  ...rest
}) => {
  const classes = useStyles();
  const [currentDonation, setCurrentDonation] = useState<Instituicao>(
    instituicoes[0]
  );
  const [open, setOpen] = useState(false);

  const [nomeForm, setNomeForm] = useState("");
  const [CNPJForm, setCNPJForm] = useState("");
  const [EmailForm, setEmailForm] = useState("");
  const [ContatoForm, setContatoForm] = useState("");
  const [ContatoTelForm, setContatoTelForm] = useState("");
  const [DescricaoForm, setDescricaoForm] = useState("");
  const [SiteForm, setSiteForm] = useState("");
  const [URLFotoForm, setURLFotoForm] = useState("");

  const handleClickOpenDialog = useCallback((data: any) => {
    setCurrentDonation(data);
    setOpen(true);
  }, []);

  function handleClose() {
    setOpen(false);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Setor de Atuação</StyledTableCell>
            <StyledTableCell align="right">E-mail</StyledTableCell>
            <StyledTableCell align="right">Site</StyledTableCell>
            <StyledTableCell align="right">Visualizar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instituicoes
            ? instituicoes.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.nome}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.setorAtuacao.descricao}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.site}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        handleClickOpenDialog(row);
                      }}
                    >
                      Abrir
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : "Empty"}
        </TableBody>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Adicionar novo
        </Button>
      </Table>

      {/* DIALOG  */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {currentDonation ? currentDonation.nome : "Nova Instituição"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Adicione ou edite os dados referentes à Instituição
          </DialogContentText>
          {/* <Table >
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
              <StyledTableCell align="right">{new Date(cupom.DataValidade).toLocaleDateString("pt-BR")}</StyledTableCell>
              <StyledTableCell align="right">{cupom.Ativo ? "Ativo" : "Vencido"}</StyledTableCell>
            </StyledTableRow>
            )
            }) : "Loading"}
        </TableBody>
      </Table> */}
          <p>
            <TextField
              value={nomeForm}
              id="filled-1"
              label="Nome"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-2"
              label="CNPJ"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-3"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-4"
              label="Contato"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-5"
              label="Contato Telefone"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-6"
              label="Site"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-7"
              label="Descrição"
              variant="outlined"
              fullWidth
            />
          </p>
          <p>
            <TextField
              id="filled-8"
              label="Foto URL"
              variant="outlined"
              fullWidth
            />
          </p>

          <Button variant="outlined" color="primary">
            Adicionar
          </Button>
          <Button variant="outlined" color="primary">
            Alterar
          </Button>
          <Button variant="outlined" color="secondary">
            Excluir
          </Button>
        </DialogContent>
      </Dialog>
    </TableContainer>
  );
};

export default InstitutionsTables;
