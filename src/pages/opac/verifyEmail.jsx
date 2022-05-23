import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { verifyEmail } from '../../services/auth.service'
import { useMemo } from 'react'

const VerifyEmail = () => {
    const history = useHistory('')
    const { search } = useLocation('')
    const params = useMemo(() => new URLSearchParams(search), [search])
    useEffect(() => {
        verifyEmail(params.get('code')).then(()=>{
            history.push('/login')
        });
    }, [params, history])
    return (
        <div>
            Loading
        </div>
    )
}
export default VerifyEmail