import { useState } from "react";
import {
  AddNewNoteContainer,
  AddNewNoteButtonWrapper,
  Text,
  AddIcon,
  NoteContainer,
  NoteText,
  NoteButtonsContainer,
} from "./AddNewNote.styles";
import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";

const AddNewNote = (props) => {
  const [newNoteActive, setNewNoteActive] = useState(false);
  const [noteText, setNoteText] = useState("");
  const {t, i18n} = useTranslation()

  const addNote = () => {
    if (!noteText) return;
    if (props.notes.includes(noteText)) return;
    props.setNotes((oldNotes) => [...oldNotes, noteText]);
    discardNote();

    const currentNotes = JSON.parse(window.localStorage.getItem("notes"));
    const noteToSave = currentNotes ?  [...currentNotes, noteText] : [noteText]
    window.localStorage.setItem("notes", JSON.stringify(noteToSave));
  };

  const discardNote = () => {
    setNoteText("");
    setNewNoteActive(false);
  };
  return (
    <AddNewNoteContainer>
      <AddNewNoteButtonWrapper
        onClick={() => {
          setNewNoteActive(!newNoteActive);
        }}
      >
        <Text>{t('addNote')}</Text>
        <AddIcon />
      </AddNewNoteButtonWrapper>
      <NoteContainer active={newNoteActive}>
        {newNoteActive && (
          <>
            <NoteText
              placeholder={t('enterNote')}
              onChange={(e) => setNoteText(e.target.value)}
            />
            <NoteButtonsContainer>
              <Button noArrow onClick={addNote} text={t('add')} />
              <Button noArrow onClick={discardNote} text={t('cancel')} />
            </NoteButtonsContainer>
          </>
        )}
      </NoteContainer>
    </AddNewNoteContainer>
  );
};

export default AddNewNote;
