import {
  Article,
  ArticleConnection,
  ArticleAggregator,
  ArticleGroupBy,
  ArticleConnectionId,
  ArticleConnection_Id,
  ArticleConnectionCreatedAt,
  ArticleConnectionUpdatedAt,
  ArticleConnectionTitle,
  ArticleConnectionContent,
  ArticleConnectionFeatured_Image,
  ArticleConnectionSlug,
  ArticleConnectionUsers_Permissions_User,
  ArticleConnectionExcerpt,
  ArticleConnectionPublished_At,
  CreateArticlePayload,
  UpdateArticlePayload,
  DeleteArticlePayload,
} from './Article';
import {
  ArticleCategory,
  ArticleCategoryConnection,
  ArticleCategoryAggregator,
  ArticleCategoryGroupBy,
  ArticleCategoryConnectionId,
  ArticleCategoryConnection_Id,
  ArticleCategoryConnectionCreatedAt,
  ArticleCategoryConnectionUpdatedAt,
  ArticleCategoryConnectionTitle,
  ArticleCategoryConnectionSlug,
  CreateArticleCategoryPayload,
  UpdateArticleCategoryPayload,
  DeleteArticleCategoryPayload,
} from './ArticleCategory';
import {
  ArticleTags,
  ArticleTagsConnection,
  ArticleTagsAggregator,
  ArticleTagsGroupBy,
  ArticleTagsConnectionId,
  ArticleTagsConnection_Id,
  ArticleTagsConnectionCreatedAt,
  ArticleTagsConnectionUpdatedAt,
  ArticleTagsConnectionTitle,
  ArticleTagsConnectionSlug,
  CreateArticleTagPayload,
  UpdateArticleTagPayload,
  DeleteArticleTagPayload,
} from './ArticleTags';
import {
  Gallery,
  GalleryConnection,
  GalleryAggregator,
  GalleryGroupBy,
  GalleryConnectionId,
  GalleryConnection_Id,
  GalleryConnectionCreatedAt,
  GalleryConnectionUpdatedAt,
  GalleryConnectionTitle,
  GalleryConnectionSlug,
  GalleryConnectionDescription,
  GalleryConnectionFeatured_Image,
  GalleryConnectionStatus,
  GalleryConnectionNsfw,
  CreateGalleryPayload,
  UpdateGalleryPayload,
  DeleteGalleryPayload,
} from './Gallery';
import {
  GalleryCategories,
  GalleryCategoriesConnection,
  GalleryCategoriesAggregator,
  GalleryCategoriesGroupBy,
  GalleryCategoriesConnectionId,
  GalleryCategoriesConnection_Id,
  GalleryCategoriesConnectionCreatedAt,
  GalleryCategoriesConnectionUpdatedAt,
  GalleryCategoriesConnectionTitle,
  GalleryCategoriesConnectionSlug,
  GalleryCategoriesConnectionImage_Large,
  GalleryCategoriesConnectionImage_Full,
  GalleryCategoriesConnectionImage_Large_Watermarked,
  GalleryCategoriesConnectionImage_Full_Watermarked,
  CreateGalleryCategoryPayload,
  UpdateGalleryCategoryPayload,
  DeleteGalleryCategoryPayload,
} from './GalleryCategory';
import {
  GalleryImage,
  GalleryImageConnection,
  GalleryImageAggregator,
  GalleryImageGroupBy,
  GalleryImageConnectionId,
  GalleryImageConnection_Id,
  GalleryImageConnectionCreatedAt,
  GalleryImageConnectionUpdatedAt,
  GalleryImageConnectionCaption,
  GalleryImageConnectionSlug,
  GalleryImageConnectionWatermarked,
  GalleryImageConnectionClean,
  GalleryImageConnectionShare,
  GalleryImageConnectionSell,
  CreateGalleryImagePayload,
  UpdateGalleryImagePayload,
  DeleteGalleryImagePayload,
} from './GalleryImage';
import {
  GalleryTags,
  GalleryTagsConnection,
  GalleryTagsAggregator,
  GalleryTagsGroupBy,
  GalleryTagsConnectionId,
  GalleryTagsConnection_Id,
  GalleryTagsConnectionCreatedAt,
  GalleryTagsConnectionUpdatedAt,
  GalleryTagsConnectionTitle,
  GalleryTagsConnectionSlug,
  CreateGalleryTagPayload,
  UpdateGalleryTagPayload,
  DeleteGalleryTagPayload,
} from './GalleryTag';
import {
  Gardens,
  GardensConnection,
  GardensAggregator,
  GardensGroupBy,
  GardensConnectionId,
  GardensConnection_Id,
  GardensConnectionCreatedAt,
  GardensConnectionUpdatedAt,
  GardensConnectionTitle,
  GardensConnectionSlug,
  GardensConnectionContents,
  CreateGardenPayload,
  UpdateGardenPayload,
  DeleteGardenPayload,
} from './Garden';
import { ComponentGlobalSell, ComponentGlobalShare } from './GlobalComponents';
import {
  UploadFile,
  UploadFileConnection,
  UploadFileAggregator,
  UploadFileAggregatorSum,
  UploadFileAggregatorAvg,
  UploadFileAggregatorMin,
  UploadFileAggregatorMax,
  UploadFileGroupBy,
  UploadFileConnectionId,
  UploadFileConnection_Id,
  UploadFileConnectionCreatedAt,
  UploadFileConnectionUpdatedAt,
  UploadFileConnectionName,
  UploadFileConnectionAlternativeText,
  UploadFileConnectionCaption,
  UploadFileConnectionWidth,
  UploadFileConnectionHeight,
  UploadFileConnectionFormats,
  UploadFileConnectionHash,
  UploadFileConnectionExt,
  UploadFileConnectionMime,
  UploadFileConnectionSize,
  UploadFileConnectionUrl,
  UploadFileConnectionPreviewUrl,
  UploadFileConnectionProvider,
  UploadFileConnectionProvider_Metadata,
  DeleteFilePayload,
} from './UploadFile';
import {
  UsersPermissionsMe,
  UsersPermissionsMeRole,
  UsersPermissionsLoginPayload,
  UserPermissionsPasswordPayload,
  UsersPermissionsPermission,
  UsersPermissionsRole,
  UsersPermissionsRoleConnection,
  UsersPermissionsRoleAggregator,
  UsersPermissionsRoleGroupBy,
  UsersPermissionsRoleConnectionId,
  UsersPermissionsRoleConnection_Id,
  UsersPermissionsRoleConnectionName,
  UsersPermissionsRoleConnectionDescription,
  UsersPermissionsRoleConnectionType,
  CreateRolePayload,
  UpdateRolePayload,
  DeleteRolePayload,
  UsersPermissionsUser,
  UsersPermissionsUserConnection,
  UsersPermissionsUserAggregator,
  UsersPermissionsUserGroupBy,
  UsersPermissionsUserConnectionId,
  UsersPermissionsUserConnection_Id,
  UsersPermissionsUserConnectionCreatedAt,
  UsersPermissionsUserConnectionUpdatedAt,
  UsersPermissionsUserConnectionUsername,
  UsersPermissionsUserConnectionEmail,
  UsersPermissionsUserConnectionProvider,
  UsersPermissionsUserConnectionConfirmed,
  UsersPermissionsUserConnectionBlocked,
  UsersPermissionsUserConnectionRole,
  CreateUserPayload,
  UpdateUserPayload,
  DeleteUserPayload,
} from './UsersPermissions';

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | ArticleCategory
  | ArticleCategoryConnection
  | ArticleCategoryAggregator
  | ArticleCategoryGroupBy
  | ArticleCategoryConnectionId
  | ArticleCategoryConnection_Id
  | ArticleCategoryConnectionCreatedAt
  | ArticleCategoryConnectionUpdatedAt
  | ArticleCategoryConnectionTitle
  | ArticleCategoryConnectionSlug
  | CreateArticleCategoryPayload
  | UpdateArticleCategoryPayload
  | DeleteArticleCategoryPayload
  | ArticleTags
  | ArticleTagsConnection
  | ArticleTagsAggregator
  | ArticleTagsGroupBy
  | ArticleTagsConnectionId
  | ArticleTagsConnection_Id
  | ArticleTagsConnectionCreatedAt
  | ArticleTagsConnectionUpdatedAt
  | ArticleTagsConnectionTitle
  | ArticleTagsConnectionSlug
  | CreateArticleTagPayload
  | UpdateArticleTagPayload
  | DeleteArticleTagPayload
  | Article
  | ArticleConnection
  | ArticleAggregator
  | ArticleGroupBy
  | ArticleConnectionId
  | ArticleConnection_Id
  | ArticleConnectionCreatedAt
  | ArticleConnectionUpdatedAt
  | ArticleConnectionTitle
  | ArticleConnectionContent
  | ArticleConnectionFeatured_Image
  | ArticleConnectionSlug
  | ArticleConnectionUsers_Permissions_User
  | ArticleConnectionExcerpt
  | ArticleConnectionPublished_At
  | CreateArticlePayload
  | UpdateArticlePayload
  | DeleteArticlePayload
  | GalleryCategories
  | GalleryCategoriesConnection
  | GalleryCategoriesAggregator
  | GalleryCategoriesGroupBy
  | GalleryCategoriesConnectionId
  | GalleryCategoriesConnection_Id
  | GalleryCategoriesConnectionCreatedAt
  | GalleryCategoriesConnectionUpdatedAt
  | GalleryCategoriesConnectionTitle
  | GalleryCategoriesConnectionSlug
  | GalleryCategoriesConnectionImage_Large
  | GalleryCategoriesConnectionImage_Full
  | GalleryCategoriesConnectionImage_Large_Watermarked
  | GalleryCategoriesConnectionImage_Full_Watermarked
  | CreateGalleryCategoryPayload
  | UpdateGalleryCategoryPayload
  | DeleteGalleryCategoryPayload
  | GalleryImage
  | GalleryImageConnection
  | GalleryImageAggregator
  | GalleryImageGroupBy
  | GalleryImageConnectionId
  | GalleryImageConnection_Id
  | GalleryImageConnectionCreatedAt
  | GalleryImageConnectionUpdatedAt
  | GalleryImageConnectionCaption
  | GalleryImageConnectionSlug
  | GalleryImageConnectionWatermarked
  | GalleryImageConnectionClean
  | GalleryImageConnectionShare
  | GalleryImageConnectionSell
  | CreateGalleryImagePayload
  | UpdateGalleryImagePayload
  | DeleteGalleryImagePayload
  | GalleryTags
  | GalleryTagsConnection
  | GalleryTagsAggregator
  | GalleryTagsGroupBy
  | GalleryTagsConnectionId
  | GalleryTagsConnection_Id
  | GalleryTagsConnectionCreatedAt
  | GalleryTagsConnectionUpdatedAt
  | GalleryTagsConnectionTitle
  | GalleryTagsConnectionSlug
  | CreateGalleryTagPayload
  | UpdateGalleryTagPayload
  | DeleteGalleryTagPayload
  | Gallery
  | GalleryConnection
  | GalleryAggregator
  | GalleryGroupBy
  | GalleryConnectionId
  | GalleryConnection_Id
  | GalleryConnectionCreatedAt
  | GalleryConnectionUpdatedAt
  | GalleryConnectionTitle
  | GalleryConnectionSlug
  | GalleryConnectionDescription
  | GalleryConnectionFeatured_Image
  | GalleryConnectionStatus
  | GalleryConnectionNsfw
  | CreateGalleryPayload
  | UpdateGalleryPayload
  | DeleteGalleryPayload
  | Gardens
  | GardensConnection
  | GardensAggregator
  | GardensGroupBy
  | GardensConnectionId
  | GardensConnection_Id
  | GardensConnectionCreatedAt
  | GardensConnectionUpdatedAt
  | GardensConnectionTitle
  | GardensConnectionSlug
  | GardensConnectionContents
  | CreateGardenPayload
  | UpdateGardenPayload
  | DeleteGardenPayload
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnection_Id
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionUpdatedAt
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnection_Id
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnection_Id
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionUpdatedAt
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentGlobalSell
  | ComponentGlobalShare;
