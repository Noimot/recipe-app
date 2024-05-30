import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addRecipe, getRecipeById, updateRecipe } from "../../service/recipe";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddRecipeForm = ({ recipeId }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();

  const query = useQuery(["recipes", recipeId], () => getRecipeById(recipeId));
  const recipe = query?.data?.data?.recipe;
  //To add new recipe
  const addMutation = useMutation(addRecipe, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("recipes");
      navigate("/recipe");
      toast.success("Recipe added successfully!");
    },
  });

  // To update existing recipe
  const updateMutation = useMutation(({ id, data }) => updateRecipe(id, data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("recipes");
      navigate("/recipe");
      console.log(data, "updated data");
      toast.success("Recipe updated successfully!");
    },
  });

  const recipeSchema = object({
    name: string().required().label("Recipe Name"),
    ingredients: string().required().label("Ingredients"),
    instructions: string().required().label("Instructions"),
    servings: string().label("Servings"),
    prepTime: string().label("Preparation Time"),
    cookTime: string().label("Cooking Time"),
  });
  const form = useFormik({
    initialValues: {
      name: "" || recipe?.name,
      ingredients: "" || recipe?.ingredients,
      instructions: "" || recipe?.instructions,
      servings: "" || recipe?.servings,
      prepTime: "" || recipe?.prepTime,
      cookTime: "" || recipe?.cookTime,
    },
    validateOnMount: false,
    enableReinitialize: true,
    validationSchema: recipeSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("servings", values.servings);
      formData.append("instructions", values.instructions);
      formData.append("ingredients", values.ingredients);
      formData.append("prepTime", values.prepTime);
      formData.append("cookTime", values.cookTime);
      if (photo) {
        formData.append("photo", photo);
      }
      try {
        console.log(values);
        // mutation.mutate(values);
        if (recipeId) {
          // Update existing recipe, passing id and data separately
          console.log(values, recipeId);
          updateMutation.mutate({ id: recipeId, data: formData });
        } else {
          // Add new recipe
          addMutation.mutate(formData);
        }
      } catch (error) {
        toast.error("An error occurred");
        console.log(error);
      }
    },
  });

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  return (
    <FormikProvider value={form}>
      <div
        className="breadcumb-area bg-img bg-overlay mb-50"
        style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Add a recipe</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-80 mt-80 mx-auto">
            <div className="contact-form-area">
              <form onSubmit={form.handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Recipe Name"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values["name"]}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="ingredients"
                      name="ingredients"
                      placeholder="Add ingredients using pipe (|) , comma (,), colon (:) or semicolon (;) as delimeter"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values["ingredients"]}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="servings"
                      name="servings"
                      placeholder="Servings"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values["servings"]}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="prepTime"
                      name="prepTime"
                      placeholder="Preparation Time"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values["prepTime"]}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="cookTime"
                      name="cookTime"
                      placeholder="Cook Time"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values["cookTime"]}
                    />
                  </div>
                  <div className="col-12 mb-15">
                    <input
                      className="col-12"
                      type="file"
                      onChange={handlePhotoChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="instructions"
                      className="form-control"
                      id="instructions"
                      cols={30}
                      rows={10}
                      placeholder="Recipe Instructions"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values["instructions"]}
                      // defaultValue={""}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn delicious-btn mt-30" type="submit">
                      Add Recipe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
};

export default AddRecipeForm;
