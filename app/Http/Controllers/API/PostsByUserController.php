<?php

namespace App\Http\Controllers\API;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostsByUserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param int $user_id
     *
     * @return \Illuminate\Http\Response
     */
    public function show(int $user_id)
    {
        try {
            $posts = Post::where('user_id', $user_id)->get();

            return response()->json([
                'posts_by_user' => $posts
            ],200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went wrong in PostsByUserController.show',
                'error' => $e->getMessage()
            ], 400);
        }
    }
}

