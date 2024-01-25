import { LargeNumberLike } from "crypto";

namespace Models {
  export interface Post {
    number: number;
    datetime: string;
    name: string;
    subject?: string;
    comment?: string;
    filenames: string[]; // gallery image source
    timestamp: number;
    reply: number; // 0 if OP
    board: string;
    replies: number;
    images: number;

    // a few extras not originally included in model, present in api docs
    sticky: boolean;
    closed: boolean;
    bumplimit: boolean;
    archived: boolean;

    //extension: string;
    //width: number; unneeded
    //height: number; unneeded
    //tn_width: number;
    //tn_height: number;
    //upload_time: number;
    //md5: string;
    //filesize: number;
    //id: string; rolled into username
  }

  export interface Board {
    board: string;
    title: string;
    ws_board: boolean;
    max_filesize: number;
    max_comment_chars: number;
    bump_limit: number;
    cooldowns: {
      threads: number;
      replies: number;
      images: number;
    };
    meta_description: string;
    is_archived?: number;
    spoilers?: number;
    forced_anon?: number;
    code_tags?: number;
    webm_audio?: number;
    min_image_width?: number;
    min_image_height?: number;
    text_only?: number;
    apng?: number;
    svg?: number;
    code_langs?: string[];
    category?: string;

    //max_webm_filesize: number;
    //max_webm_duration: number;
    //image_limit: number;
    //custom_spoilers?: number;
    //user_ids?: number;
    //oekaki?: number;
    //math_tags?: number;
    //sjis_tags?: number;
    //require_subject?: number;
    //troll_flags?: number;
    //spoilers_enabled?: number;
    //custom_flags?: number;
    //board_flags?: number;
    //country_flags?: number;
    //webm_mime?: string[];
    //user_flags?: number;
  }

  export interface User {
    id: string;
    name: string;
    pass: string;
    email: string;
    avatar: string;
    birthday: string;
    banned: number; // days of ban; -1 = perma, 0 = unbanned
    mod: string[]; // boards with mod privs
    admin: boolean;
    flags?: string[]; // country/other flags here if we still want them? 
  }

  export interface ThreadListItem {
    no: number;
    last_modified: number;
    replies: number;
  }


  export interface ThreadList {
    page: number;
    threads: ThreadListItem[]
  }


  export interface Catalog {
    page: number;
    threads: Post[];
  }

  export interface BoardAPI {
    board: Board;
    catalog: Catalog[];
  }
}

export default Models;