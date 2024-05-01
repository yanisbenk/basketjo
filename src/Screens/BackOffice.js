// BackOffice.js
import React, { useState } from "react";
import styled from "styled-components";

const BackOfficeContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end; /* Alignement à droite */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const BackOffice = ({ updateMedal }) => {
  const [medal, setMedal] = useState(""); // State pour la nouvelle valeur de la médaille

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMedal(medal); // Appel de la fonction de mise à jour de la médaille
  };

  return (
    <BackOfficeContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="medal">Nouvelle médaille :</Label>
          <Input
            type="text"
            id="medal"
            value={medal}
            onChange={(e) => setMedal(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Modifier</Button>
      </Form>
    </BackOfficeContainer>
  );
};

export default BackOffice;
