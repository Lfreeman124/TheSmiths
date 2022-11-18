import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Props {
  hasBeenUpdated: boolean;
  onUpdate: (bool: boolean) => void;
}

const SongList: React.FC<Props> = (props: any) => {
  const [songList, setSongList] = useState<{}[]>([]);

  const getSongs = async () => {
    let songs: any[] = [];
    const data = collection(db, "requests");
    const snapshot = await getDocs(data);
    const songsData = snapshot.docs.map((doc) => doc.data());
    songsData.forEach((each: any) => {
      songs.push({
        song: each.song,
        artist: each.artist,
        created: each.created,
      });
    });
    songs.sort((a, b) => b.created - a.created);

    setSongList(songs);
    props.onUpdate(false);
  };

  useEffect(() => {
    props.hasBeenUpdated && getSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hasBeenUpdated]);

  return (
    <TableContainer
      style={{
        width: "90%",
        padding: "0.5rem",
        margin: "3rem 5% 0",
        borderRadius: "5px",
        background: "hsla(24, 22%, 75%, 0.5)",
      }}
      component={Paper}
    >
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <h2 style={{ fontWeight: "200" }}>Requested Songs</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songList.map((song: any, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">{song.song}</TableCell>
              <TableCell align="right">{song.artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SongList;
