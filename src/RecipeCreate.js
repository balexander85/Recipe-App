import React, {useState} from "react";

function RecipeCreate({createRecipe}) {
    const initialFormData = {
        name: "",
        cuisine: "",
        photo: "",
        rating: "",
        ingredients: "",
        preparation: "",
    }
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createRecipe(formData);
        setFormData(initialFormData);
    }

    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers

    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                <tr>
                    <td><input name="name" placeholder="Name" value={formData.name} onChange={handleChange}/></td>
                    <td><input name="cuisine" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange}/>
                    </td>
                    <td><input name="photo" placeholder="Photo" value={formData.photo} onChange={handleChange}/></td>
                    <td>
                      <textarea name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange}/></td>
                    <td>
                      <textarea name="preparation" placeholder="Preparation" value={formData.preparation} onChange={handleChange}/></td>
                    <td>
                        <button type="submit">Create</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
