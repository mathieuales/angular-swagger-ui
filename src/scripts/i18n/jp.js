/*
 * Orange angular-swagger-ui - v0.3.3
 *
 * (C) 2015 Orange, all right reserved
 * MIT Licensed
 */
'use strict';

angular
	.module('swaggerUi')
	.config(function(swaggerTranslatorProvider) {

		swaggerTranslatorProvider
			.addTranslations('jp', {
				infoContactCreatedBy: '作家名 {{name}}',
				infoContactUrl: 'もっと見る',
				infoContactEmail: '開発者連絡先',
				infoLicense: 'ライセンス: ',
				infoBaseUrl: 'ベース URL',
				infoApiVersion: 'API 版',
				infoHost: 'ホスト',
				endPointToggleOperations: '開く/閉じる',
				endPointListOperations: 'エンドポイント一覧',
				endPointExpandOperations: '機能詳しく説明',
				operationDeprected: 'ワーニング: 亡くなった機能',
				operationImplementationNotes: '連携方法説明',
				headers: 'レスポンスヘッダ',
				headerName: 'ヘッダ',
				headerDescription: '説明',
				headerType: 'タイプ',
				parameters: 'パラメター',
				parameterName: 'パラメター',
				parameterValue: 'バーリュ',
				parameterDescription: '説明',
				parameterType: 'パラメタータイプ',
				parameterDataType: 'データタイプ',
				parameterOr: ' か ',
				parameterRequired: '(必要)',
				parameterModel: 'モーデル',
				parameterSchema: 'モーデル スキマ',
				parameterContentType: 'パラメター コンテンツ　タイプ',
				parameterDefault: '{{ディフォルト}} (ディフォルト)',
				parameterSetValue: 'パラメターを選ぶ為クリック',
				responseClass: 'レスポンス　クラス (ステタース {{ステタース}})',
				responseModel: 'モーデル',
				responseSchema: 'モーデル スキマ',
				responseContentType: 'レスポンス コンテンツタイプ',
				responses: 'レスポンス　メセージ',
				responseCode: 'HTTP ステタースコード',
				responseReason: '理由',
				responseHide: 'レスポンスを外す',
				modelOptional: 'オプショナル',
				modelOr: ' か ',
				explorerUrl: 'リクエストURL',
				explorerBody: 'レスポンスボヂー',
				explorerCode: 'レスポンスコード',
				explorerHeaders: 'レスポンス ヘダー',
				explorerLoading: 'ロード中...',
				explorerTryIt: '試してください!',
				errorNoParserFound: 'No parser found for Swagger specification of type {{type}} and version {{version}}',
				errorParseFailed: 'Swaggerスペッキをパース心配になりました : {{message}}',
				errorJsonParse: 'JSONをパース心配なりました',
				errorNoYamlParser: 'YAML パーサを見つかりませんでした、js-yaml libraryを追加お願いいたします'
			});

	});