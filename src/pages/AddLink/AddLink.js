import React from "react";
import { useDispatch } from "react-redux";
import { addNewLink } from 'store/links/actions';
import { useForm, FormProvider } from "react-hook-form";
import toast from 'react-hot-toast';
import Input from "components/Input";
import ReturnLink from "components/ReturnLink";
import Button from "components/Button";
import "./AddLink.scss";

const AddLink = () => {
  const methods = useForm({ reValidateMode: "onTouched"});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = methods;

  const dispatch = useDispatch();

  const addLink = (data) => {
    dispatch(addNewLink({...data, id: Date.now(), points:0}));
    toast.success(`${data.name} başarıyla eklendi`);
    reset();
  };

  return (
    <div className="add-link">
      <ReturnLink />
      <h2 className="add-link__title">Add New Link</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit((data) => addLink(data))}>
          <Input
            label="Link Name:"
            placeholder="e.g. Alphapet"
            {...register("name", {
              required: "Lütfen boş bırakmayın.",
              minLength: {
                value: 2,
                message: "Minimum 2 karakter giriniz.",
              }
            })}
            ref={null}
          />
          {errors.name && <p className="add-link__error">{errors.name.message}</p>}
          <Input
            label="Link URL:"
            placeholder="e.g. http://abc.xyz"
            {...register("url", {
              required: "Lütfen boş bırakmayın.",
              pattern: {
                value:
                /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Lütfen geçerli bir url adresi giriniz.",
              }
            })}
            ref={null}
          />
          {errors.url && <p className="add-link__error">{errors.url.message}</p>}
          <Button />
        </form>
      </FormProvider>
    </div>
  );
};

export default AddLink;
