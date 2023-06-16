import { useState } from 'react';
import { Helmet } from "react-helmet";
import { useForm } from 'react-hook-form';
function NewPokemonForm() {
  return (
    <div>
      <Helmet>
        <title>Create Pokemon</title>
      </Helmet>
    </div>
  )
}

export default NewPokemonForm;