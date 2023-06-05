import React from 'react'
import Head from 'next/head'

export default function signin() {
  return (<>
  <Head>
        <title>Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className="row">
    <div className="col-md-6">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Sign In</h5>
            <div className="row">
                <div className="col-md-12">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" placeholder="Enter Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Enter Password" />
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
    </div>
  </div>
  </>
    
  )
}