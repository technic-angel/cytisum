import { LargeNumberLike } from "crypto";

interface Thread {
  no: number;
  now: string;
  name: string;
  sub: string;
  com: string;
  filename: string;
  ext: string;
  w: number;
  h: number;
  tn_w: number;
  tn_h: number;
  tim: number;
  time: number;
  md5: string;
  fsize: number;
  resto: number;
  id: string;
  country: string;
  country_name: string;
  board: string;
  replies: number;
  images: number;
}

interface Post {
  no: number;
  now: string;
  name: string;
  sub: string;
  com: string;
  filename: string;
  ext: string;
  w: number;
  h: number;
  tn_w: number;
  tn_h: number;
  tim: number;
  time: number;
  md5: string;
  fsize: number;
  resto: number;
  id: string;
  country: string;
  country_name: string;
}

interface Board {
  board: string;
  title: string;
  ws_board: number;
  per_page: number;
  pages: number;
  max_filesize: number;
  max_webm_filesize: number;
  max_comment_chars: number;
  max_webm_duration: number;
  bump_limit: number;
  image_limit: number;
  cooldowns: {
    threads: number;
    replies: number;
    images: number;
  };
  meta_description: string;
  is_archived: number;
  spoilers: number;
  custom_spoilers: number;
  forced_anon: number;
  user_ids: number;
  code_tags: number;
  webm_audio: number;
  min_image_width: number;
  min_image_height: number;
  oekaki: number;
  sjis_tags: number;
  text_only: number;
  require_subject: number;
  troll_flags: number;
  math_tags: number;
  apng: number;
  svg: number;
  spoilers_enabled: number;
  custom_flags: number;
  board_flags: number;
  country_flags: number;
  user_flags: number;
  code_langs: string[];
  webm_mime: string[];
  category?: string;
}

interface ThreadListItem {
  no: number;
  last_modified: number;
  replies: number;
}


interface ThreadList {
  page: number;
  threads: ThreadListItem[]
}


interface Catalog {
  page: number;
  threads: Thread[];
}

interface BoardAPI {
  board: Board;
  catalog: Catalog[];
}

