import React, { useCallback, useEffect, useState } from "react";
import isAfter from "date-fns/isAfter";

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
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { isBefore } from "date-fns/esm";
import { Cupom } from "../../models/Cupom";

export interface CuponsProps {
  Cupons: Cupom[];
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

const CuponsTable: React.FC<CuponsProps> = ({ children, Cupons, ...rest }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Empresa</StyledTableCell>
            <StyledTableCell align="right">Data validade</StyledTableCell>
            <StyledTableCell align="right">Descricao</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
            <StyledTableCell align="right">Ativo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Cupons
            ? Cupons.map((row) => (
                <StyledTableRow key={row.nome}>
                  <StyledTableCell component="th" scope="row">
                    {row.nome}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.empresaParceria.nome}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(row.dataValidade).toLocaleDateString("pt-BR")}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.descricao}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {"R$" + row.valor}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isAfter(new Date(row.dataValidade), new Date())
                      ? "Ativo"
                      : "Vencido"}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : "Empty"}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CuponsTable;
