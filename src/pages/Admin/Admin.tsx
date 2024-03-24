import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getResorts } from '../../redux/slices/resorts/resortSlice';


const Admin = () => {
  

  const dispatch = useAppDispatch();
  useEffect(() => {

    dispatch(getResorts())

  }, [])
  return (
    <div>admin</div>
  )
}

export default Admin