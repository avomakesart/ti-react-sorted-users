import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  SelectInput,
  Title,
  UserImage,
  UserInfo,
} from './components';

const mockData = {
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
};

export default function App() {
  // place your state here

  // Use this sort data if you need it
  const sortData = ['id', 'alphabetically'];

  //   const prevPage = () => {
  // start coding here
  //  }

  //   const nextPage = () => {
  // start coding here
  //   }

  return (
    <Container>
      <Title>Our Team</Title>
      <SelectInput
        data={sortData}
        handleChange={(e: any) => console.log(e.target.value)}
        selectedValue={[0]}
        defaultValue='Select a value'
        name='id'
        label='Sort by:'
      />
      <Grid>
        <div className='flex-column items-center' key={mockData.id}>
          <UserImage url={mockData.avatar} alt={mockData.first_name} />
          <UserInfo
            fullName={`${mockData.first_name} ${mockData.last_name}`}
            email={mockData.email}
          />
        </div>
        <div className='flex-column items-center' key={mockData.id}>
          <UserImage url={mockData.avatar} alt={mockData.first_name} />
          <UserInfo
            fullName={`${mockData.first_name} ${mockData.last_name}`}
            email={mockData.email}
          />
        </div>
        <div className='flex-column items-center' key={mockData.id}>
          <UserImage url={mockData.avatar} alt={mockData.first_name} />
          <UserInfo
            fullName={`${mockData.first_name} ${mockData.last_name}`}
            email={mockData.email}
          />
        </div>
        <div className='flex-column items-center' key={mockData.id}>
          <UserImage url={mockData.avatar} alt={mockData.first_name} />
          <UserInfo
            fullName={`${mockData.first_name} ${mockData.last_name}`}
            email={mockData.email}
          />
        </div>
      </Grid>

      <div className='flex space-around mt-40'>
        <Button
          btnType='primary'
          type='button'
          onClick={(e: any) => console.log(e)}
        >
          Prev users
        </Button>

        <Button
          btnType='primary'
          type='button'
          onClick={(e: any) => console.log(e)}
        >
          Next users
        </Button>
      </div>
    </Container>
  );
}
