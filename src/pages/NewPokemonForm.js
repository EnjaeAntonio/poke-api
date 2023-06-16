import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useForm } from 'react-hook-form';
import Loading from "../components/Loading";
function NewPokemonForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  useEffect(()=>{
    setIsLoading(true);
    const timer = setTimeout(()=>{
      setIsLoading(false)
    },1000)
    return () => clearTimeout(timer);
  },[])
  
  const { register, handleSubmit, formState: {errors}} = useForm({
    mode: "onTouched",
    defaultValues: {
        basePokemonName: "",
        evoTwoName: "",
        evoThreeName: "",
        height: "",
        weight: "",
        region: "",
        type: "",
        image: "",
        ability: "",
        moveSet: "",
    }
});

  const errorStyle = (fieldError) => fieldError ? 
  {background: "rgb(255,60,87)", background: "linear-gradient(90deg, rgba(255,60,87,1) 0%, rgba(53,53,53,1) 2%)", color: "#fff"} 
  : {};

  const onSubmit = (data) =>{ setMessage(`Your Pokemon ${data.basePokemonName} has been created in ${data.region} region}!`); }

  return (
   isLoading ? <Loading/> :
   <>
   <Helmet>
     <title>Create Pokemon</title>
   </Helmet>
      <section className="center container">
        <div className="form-wrapper">
            <h2>Explore the wonders of <span className="green">nature</span> and craft your unique <span className="red">Pokémon!</span></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <h3>Base Name</h3>
                    <input type="text" {...register("basePokemonName", 
                    {required: "Base Name required", maxLength: 20})}
                    placeholder="Base Name"
                    style={errorStyle(errors.basePokemonName)}
                    />
                    <p>{errors.basePokemonName?.message}</p>
                </div>
                <div className="input-wrapper">
                    <h3>Evolution Two Name</h3>
                    <input type="text" {...register("evoTwoName", 
                    {required: "Name required", maxLength: 20})}
                    placeholder="Evolution Two"
                    style={errorStyle(errors.evoTwoName)}
                    />
                    <p>{errors.evoTwoName?.message}</p>
                </div>
                <div className="input-wrapper">
                    <h3>Evolution Three Name</h3>
                    <input type="text" {...register("evoThreeName", 
                    {required: "Name required", maxLength: 20})}
                    placeholder="Evolution Three"
                    style={errorStyle(errors.evoThreeName)}
                    />
                    <p>{errors.evoThreeName?.message}</p>
                </div>
                <div className="input-wrapper">
                    <h3>Height</h3>
                    <input type="text" 
                    inputMode="numeric"
                    {...register("height", {required: "Height is required", 
                        min: {
                            value: 0,
                            message: "Height must be higher than 0ft"
                        },
                    })}
                    placeholder="Height (ft)"
                    style={errorStyle(errors.height)}
                    className="half"
                    />
                    <p>{errors.height?.message}</p>
                </div>

                <div className="input-wrapper">
                    <h3>Weight</h3>
                    <input type="text" 
                    inputMode="numeric"
                    {...register("weight", {required: "Weight is required", 
                        min: {
                          value: 0,
                          message: "Weight must be higher than 0ft"
                      },
                    })}
                    placeholder="Weight (lbs)"
                    style={errorStyle(errors.weight)}
                    className="half"
                    />
                    <p>{errors.weight?.message}</p>
                </div>
          
                <div className="input-wrapper">
                  <h3>Region</h3>
                  <select {...register("region", {required: "region is required"})} style={errorStyle(errors.region)}>
                      <option value="" disabled>Region:</option>
                      <option value="kanto">Kanto</option>
                      <option value="johto">Johto</option>
                      <option value="hoenn">Hoenn</option>
                      <option value="sinnoh">Sinnoh</option>
                      <option value="unova">Unova</option>
                      <option value="kalos">Kalos</option>
                      <option value="alola">Alola</option>
                      <option value="galar">Galar</option>
                  </select>
                      <p>{errors.region?.message}</p>
                </div>
                
                <div className="input-wrapper">
                  <h3>Type</h3>
                  <select {...register("type", {required: "type is required"})} style={errorStyle(errors.type)}>
                      <option value="" disabled>Type:</option>
                      <option value="normal">Normal</option>
                      <option value="fighting">Fighting</option>
                      <option value="flying">Flying</option>
                      <option value="poison">Poison</option>
                      <option value="ground">Ground</option>
                      <option value="rock">Rock</option>
                      <option value="bug">Bug</option>
                      <option value="ghost">Ghost</option>
                      <option value="steel">Steel</option>
                      <option value="fire">Fire</option>
                      <option value="water">Water</option>
                      <option value="grass">Grass</option>
                      <option value="electric">Electric</option>
                      <option value="psychic">Psychic</option>
                      <option value="ice">Ice</option>
                      <option value="dragon">Dragon</option>
                      <option value="dark">Dark</option>
                      <option value="fairy">Fairy</option>
                  </select>
                      <p>{errors.type?.message}</p>
                </div>

                <div className="input-wrapper">
                  <h3>Abilities</h3>
                  <select {...register("ability", {required: "Ability is required"})} style={errorStyle(errors.ability)}>
                      <option value="" disabled>Select an ability</option>
                      <option value="overgrow">Overgrow</option>
                      <option value="chlorophyll">Chlorophyll</option>
                      <option value="blaze">Blaze</option>
                      <option value="torrent">Torrent</option>
                      <option value="swarm">Swarm</option>
                      <option value="keenEye">Keen Eye</option>
                      <option value="guts">Guts</option>
                      <option value="static">Static</option>
                      <option value="voltAbsorb">Volt Absorb</option>
                  </select>
                  <p>{errors.ability?.message}</p>
              </div>

              <div className="input-wrapper">
                <h3>Move Set</h3>
                <select {...register("moveSet", {required: "Move is required"})} style={errorStyle(errors.moveSet)}>
                    <option value="" disabled>Select a move</option>
                    <option value="tackle">Tackle</option>
                    <option value="vineWhip">Vine Whip</option>
                    <option value="thunderbolt">Thunderbolt</option>
                    <option value="flamethrower">Flamethrower</option>
                    <option value="surf">Surf</option>
                    <option value="iceBeam">Ice Beam</option>
                    <option value="psychic">Psychic</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="shadowBall">Shadow Ball</option>
                    <option value="rockSlide">Rock Slide</option>
                </select>
                <p>{errors.moveSet?.message}</p>
            </div>

              <div className="input-wrapper">
                  <h3>Upload Image</h3>
                  <input type="file" {...register("image")}
                      style={errorStyle(errors.image)}
                  />
                  <p>{errors.image?.message}</p>
              </div>

              <div className="input-wrapper create">
                  <p>{message}</p>
                  <input type="submit" value="Create!"/>
              </div>
            </form>
        </div>
      </section>
    </>
  )
}

export default NewPokemonForm;