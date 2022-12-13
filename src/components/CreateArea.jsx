import React, { useState } from 'react'

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [ note, setNote ] = useState({
    title: '',
    content: ''
  }
  );

  function handleChange(e) {
    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    e.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						type="text"
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}

				<textarea
					name="content"
					id=""
					rows={isExpanded ? 3 : 1}
					onClick={expand}
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
				/>

				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea