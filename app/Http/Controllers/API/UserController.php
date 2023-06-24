<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateUserRequest;

class UserController extends Controller
{

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        try{
            $user = User::findOrFail($id);
            return response()->json(['user' => $user],200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Something went wrong in UserController.show',
                'error' => $e->getMessage()
            ], 400);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        try{
            $user = User::findOrFail($id);
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->location = $request->location;
            $user->description = $request->description;

            $user->save();
            return response()->json('User details updated',200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Something went wrong in UserController.update',
                'error' => $e->getMessage()
            ], 400);
        }
    }
}
