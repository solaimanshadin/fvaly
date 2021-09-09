import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react';
import React, { useState } from 'react';
import ProductService from 'services/ProductService';

interface IFormData {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: string;
  image: any;
  __v: number;
}
const AddProduct = () => {
  const [formData, setFormData] = useState<IFormData>({
    store: '611133844180ee0b13254168',
    category: '611130734180ee0b1325415e',
  } as IFormData);
  const [file, setFile] = useState<string>('');
  const handleFileUpload = (e: any) => {
    setFile(e.target.files[0]);
  };
  console.log('file', file);
  const handleOnChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    // const dataSubmit: any = {
    //   ...formData,
    //   image: file,
    // };

    const newFormData = new FormData();
    newFormData.append('name', formData.name);
    newFormData.append('category', formData.category);
    newFormData.append('store', formData.store);
    newFormData.append('description', formData.description);
    newFormData.append('image', file);
    newFormData.append('price', formData.price);
    ProductService.addProduct(newFormData);
  };

  return (
    <div>
      <CCard>
        <CCardHeader>Add Product</CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel>Name</CFormLabel>
              <CFormInput
                name="name"
                onChange={handleOnChange}
                type="text"
                id="inputEmail4"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel>Price</CFormLabel>
              <CFormInput
                name="price"
                onChange={handleOnChange}
                type="text"
                id="inputPassword4"
              />
            </CCol>

            <CCol xs={12}>
              <CFormLabel>Description</CFormLabel>
              <textarea
                onChange={handleOnChange}
                className="form-control"
                rows={5}
                name="description"
                id="exampleFormControlTextarea1"
              ></textarea>
            </CCol>
            <CCol xs={12}>
              <div className="mb-3">
                <CFormLabel>Default file input example</CFormLabel>
                <CFormInput
                  onChange={handleFileUpload}
                  type="file"
                  id="formFile"
                />
              </div>
            </CCol>

            <CCol xs={12}>
              <CButton onClick={handleSubmit} type="button">
                Add Product
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default AddProduct;
