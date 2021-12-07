package com.example.backend.model;


import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import lombok.Data;

@Data
public class Post {

    @DocumentId
    private String id;
    private String authorId;

    private Post[] subPosts; //Maybe can just be strings and methods can be written to get all subPosts and have a String array here instead?
    private Post parentPost;

    private String content; 
    private Timestamp date;

    private String icon; //Filepath to bucket
    private String url; //Temporary 01/12/2021
}
