import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { Category, Input } from '../../types';
import { validator } from '../../utils';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  selectedCategory: Category | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>;
}

type FormInputs = {
  id: Input;
  category: Input
}

const emptyInputs: FormInputs = {
  id: { value: '', error: '' },
  category: { value: '', error: '' }
};

export const FormCategories = ({ open, setOpen, setCategories, selectedCategory, setSelectedCategory }: Props) => {

  const [ formData, setFormData ] = useState<FormInputs>(emptyInputs);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const inputs = Object.values(formData);
    const catName = inputs[1].value;
    const catId = (inputs[0].value !== '') ? inputs[0].value : null;

    if( catId ) {
      setCategories( (prev:Category[]) => {
        const categoryItem = prev.find( (cat:Category) => cat.id === catId );
        if( categoryItem ) categoryItem.name = catName;
        return prev
      })
    } else {
      const id = Math.floor(Math.random() * 999999).toString()
      setCategories( (prev) => [...prev, {id: id, name: catName}] )
    }

    handleClose();
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedCategory(null)
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { value, error: "" },
    }));
  };

  const handleBlur = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    const error = validator({ name, value });
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name as keyof FormInputs], error },
    }));
  };

  useEffect(() => {
    if( selectedCategory ) {
      setFormData({
        id: { value: selectedCategory.id, error: '' },
        category: { value: selectedCategory.name, error: '' }
      })
    } else {
      setFormData({
        id: { value: '', error: '' },
        category: { value: '', error: '' }
      })
    }
  }, [selectedCategory])

  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
      fullWidth
      maxWidth={'xs'}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit
      }}
      >
      <DialogTitle> Create Catoegory </DialogTitle>
      <DialogContent>
        <TextField
          required
          fullWidth
          id="category-name-id"
          name='category'
          label='Category Name'
          type='text'
          variant='outlined'
          margin='dense'
          onBlur={ handleBlur }
          onChange={ handleChange }
          sx={{ paddingBottom: 2 }}
          value={ formData['category'].value }
          // error={ !!formData['category'].error }
          // helperText={ formData['category'].error }
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose }> Cancel </Button>
        <Button type='submit'> Save </Button>
      </DialogActions>
    </Dialog>
  )
};
