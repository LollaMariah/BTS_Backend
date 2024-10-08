PGDMP  5                    |            checklist_db    16.3    16.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16675    checklist_db    DATABASE     �   CREATE DATABASE checklist_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE checklist_db;
                postgres    false            �            1259    16698    checklist_items    TABLE     =  CREATE TABLE public.checklist_items (
    id integer NOT NULL,
    item_name character varying(255) NOT NULL,
    completed boolean DEFAULT false,
    checklist_id integer,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 #   DROP TABLE public.checklist_items;
       public         heap    postgres    false            �            1259    16697    checklist_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.checklist_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.checklist_items_id_seq;
       public          postgres    false    220                       0    0    checklist_items_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.checklist_items_id_seq OWNED BY public.checklist_items.id;
          public          postgres    false    219            �            1259    16686 
   checklists    TABLE     �   CREATE TABLE public.checklists (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.checklists;
       public         heap    postgres    false            �            1259    16685    checklists_id_seq    SEQUENCE     �   CREATE SEQUENCE public.checklists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.checklists_id_seq;
       public          postgres    false    218            	           0    0    checklists_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.checklists_id_seq OWNED BY public.checklists.id;
          public          postgres    false    217            �            1259    16677    users    TABLE     G  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16676    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            
           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            `           2604    16701    checklist_items id    DEFAULT     x   ALTER TABLE ONLY public.checklist_items ALTER COLUMN id SET DEFAULT nextval('public.checklist_items_id_seq'::regclass);
 A   ALTER TABLE public.checklist_items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            ]           2604    16689    checklists id    DEFAULT     n   ALTER TABLE ONLY public.checklists ALTER COLUMN id SET DEFAULT nextval('public.checklists_id_seq'::regclass);
 <   ALTER TABLE public.checklists ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            Z           2604    16680    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    16698    checklist_items 
   TABLE DATA           k   COPY public.checklist_items (id, item_name, completed, checklist_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �       �          0    16686 
   checklists 
   TABLE DATA           H   COPY public.checklists (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   -       �          0    16677    users 
   TABLE DATA           T   COPY public.users (id, username, email, password, createdat, updatedat) FROM stdin;
    public          postgres    false    216   �                  0    0    checklist_items_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.checklist_items_id_seq', 3, true);
          public          postgres    false    219                       0    0    checklists_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.checklists_id_seq', 11, true);
          public          postgres    false    217                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    215            k           2606    16704 $   checklist_items checklist_items_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.checklist_items
    ADD CONSTRAINT checklist_items_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.checklist_items DROP CONSTRAINT checklist_items_pkey;
       public            postgres    false    220            i           2606    16691    checklists checklists_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.checklists
    ADD CONSTRAINT checklists_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.checklists DROP CONSTRAINT checklists_pkey;
       public            postgres    false    218            e           2606    16684    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            g           2606    16682    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            l           2606    16705 1   checklist_items checklist_items_checklist_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.checklist_items
    ADD CONSTRAINT checklist_items_checklist_id_fkey FOREIGN KEY (checklist_id) REFERENCES public.checklists(id);
 [   ALTER TABLE ONLY public.checklist_items DROP CONSTRAINT checklist_items_checklist_id_fkey;
       public          postgres    false    218    220    4713               E   x�3�I-.Q�,I��L��4202�5��5�T04�21�22�333��0�#�e��Y�0�ЀLsb���� >D�      �   |   x����
�@D��W�4L�l7����ՋHA������x�������)���x�K:\��}��ރBmD�&A �3C���w��e	��$_N��j�hr�ߔ�f�f�:��M�m������IP;      �   }   x�3�L�H�-�I--N-����^r~.��Q������Aif����wjiE�e�wFXyIr�q�Of^JDfZ�a��oD�^���f���iD�o)��������������������������))�=... �J+,     