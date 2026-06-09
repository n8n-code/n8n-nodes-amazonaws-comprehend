import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Batch Detect Dominant Language",
					"value": "Batch Detect Dominant Language",
					"action": "Batch Detect Dominant Language",
					"description": "Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html\">Amazon Comprehend Supported Languages</a>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage"
						}
					}
				},
				{
					"name": "Batch Detect Entities",
					"value": "Batch Detect Entities",
					"action": "Batch Detect Entities",
					"description": "Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html\">Entities</a> in the Comprehend Developer Guide. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities"
						}
					}
				},
				{
					"name": "Batch Detect Key Phrases",
					"value": "Batch Detect Key Phrases",
					"action": "Batch Detect Key Phrases",
					"description": "Detects the key noun phrases found in a batch of documents.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases"
						}
					}
				},
				{
					"name": "Batch Detect Sentiment",
					"value": "Batch Detect Sentiment",
					"action": "Batch Detect Sentiment",
					"description": "Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment"
						}
					}
				},
				{
					"name": "Batch Detect Syntax",
					"value": "Batch Detect Syntax",
					"action": "Batch Detect Syntax",
					"description": "Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html\">Syntax</a> in the Comprehend Developer Guide. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax"
						}
					}
				},
				{
					"name": "Batch Detect Targeted Sentiment",
					"value": "Batch Detect Targeted Sentiment",
					"action": "Batch Detect Targeted Sentiment",
					"description": "<p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html\">Targeted sentiment</a>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment"
						}
					}
				},
				{
					"name": "Classify Document",
					"value": "Classify Document",
					"action": "Classify Document",
					"description": "<p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html\"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ClassifyDocument"
						}
					}
				},
				{
					"name": "Contains Pii Entities",
					"value": "Contains Pii Entities",
					"action": "Contains Pii Entities",
					"description": "Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities"
						}
					}
				},
				{
					"name": "Create Dataset",
					"value": "Create Dataset",
					"action": "Create Dataset",
					"description": "Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.CreateDataset"
						}
					}
				},
				{
					"name": "Create Document Classifier",
					"value": "Create Document Classifier",
					"action": "Create Document Classifier",
					"description": "Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html\">Training classifier models</a> in the Comprehend Developer Guide. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier"
						}
					}
				},
				{
					"name": "Create Endpoint",
					"value": "Create Endpoint",
					"action": "Create Endpoint",
					"description": "Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.CreateEndpoint"
						}
					}
				},
				{
					"name": "Create Entity Recognizer",
					"value": "Create Entity Recognizer",
					"action": "Create Entity Recognizer",
					"description": "Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer"
						}
					}
				},
				{
					"name": "Create Flywheel",
					"value": "Create Flywheel",
					"action": "Create Flywheel",
					"description": "<p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.CreateFlywheel"
						}
					}
				},
				{
					"name": "Delete Document Classifier",
					"value": "Delete Document Classifier",
					"action": "Delete Document Classifier",
					"description": "<p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier"
						}
					}
				},
				{
					"name": "Delete Endpoint",
					"value": "Delete Endpoint",
					"action": "Delete Endpoint",
					"description": "Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint"
						}
					}
				},
				{
					"name": "Delete Entity Recognizer",
					"value": "Delete Entity Recognizer",
					"action": "Delete Entity Recognizer",
					"description": "<p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer"
						}
					}
				},
				{
					"name": "Delete Flywheel",
					"value": "Delete Flywheel",
					"action": "Delete Flywheel",
					"description": "<p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DeleteFlywheel"
						}
					}
				},
				{
					"name": "Delete Resource Policy",
					"value": "Delete Resource Policy",
					"action": "Delete Resource Policy",
					"description": "Deletes a resource-based policy that is attached to a custom model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy"
						}
					}
				},
				{
					"name": "Describe Dataset",
					"value": "Describe Dataset",
					"action": "Describe Dataset",
					"description": "Returns information about the dataset that you specify. For more information about datasets, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeDataset"
						}
					}
				},
				{
					"name": "Describe Document Classification Job",
					"value": "Describe Document Classification Job",
					"action": "Describe Document Classification Job",
					"description": "Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob"
						}
					}
				},
				{
					"name": "Describe Document Classifier",
					"value": "Describe Document Classifier",
					"action": "Describe Document Classifier",
					"description": "Gets the properties associated with a document classifier.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier"
						}
					}
				},
				{
					"name": "Describe Dominant Language Detection Job",
					"value": "Describe Dominant Language Detection Job",
					"action": "Describe Dominant Language Detection Job",
					"description": "Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob"
						}
					}
				},
				{
					"name": "Describe Endpoint",
					"value": "Describe Endpoint",
					"action": "Describe Endpoint",
					"description": "Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint"
						}
					}
				},
				{
					"name": "Describe Entities Detection Job",
					"value": "Describe Entities Detection Job",
					"action": "Describe Entities Detection Job",
					"description": "Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob"
						}
					}
				},
				{
					"name": "Describe Entity Recognizer",
					"value": "Describe Entity Recognizer",
					"action": "Describe Entity Recognizer",
					"description": "Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer"
						}
					}
				},
				{
					"name": "Describe Events Detection Job",
					"value": "Describe Events Detection Job",
					"action": "Describe Events Detection Job",
					"description": "Gets the status and details of an events detection job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob"
						}
					}
				},
				{
					"name": "Describe Flywheel",
					"value": "Describe Flywheel",
					"action": "Describe Flywheel",
					"description": "Provides configuration information about the flywheel. For more information about flywheels, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeFlywheel"
						}
					}
				},
				{
					"name": "Describe Flywheel Iteration",
					"value": "Describe Flywheel Iteration",
					"action": "Describe Flywheel Iteration",
					"description": "Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration"
						}
					}
				},
				{
					"name": "Describe Key Phrases Detection Job",
					"value": "Describe Key Phrases Detection Job",
					"action": "Describe Key Phrases Detection Job",
					"description": "Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
						}
					}
				},
				{
					"name": "Describe Pii Entities Detection Job",
					"value": "Describe Pii Entities Detection Job",
					"action": "Describe Pii Entities Detection Job",
					"description": "Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob"
						}
					}
				},
				{
					"name": "Describe Resource Policy",
					"value": "Describe Resource Policy",
					"action": "Describe Resource Policy",
					"description": "Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy"
						}
					}
				},
				{
					"name": "Describe Sentiment Detection Job",
					"value": "Describe Sentiment Detection Job",
					"action": "Describe Sentiment Detection Job",
					"description": "Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob"
						}
					}
				},
				{
					"name": "Describe Targeted Sentiment Detection Job",
					"value": "Describe Targeted Sentiment Detection Job",
					"action": "Describe Targeted Sentiment Detection Job",
					"description": "Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob"
						}
					}
				},
				{
					"name": "Describe Topics Detection Job",
					"value": "Describe Topics Detection Job",
					"action": "Describe Topics Detection Job",
					"description": "Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob"
						}
					}
				},
				{
					"name": "Detect Dominant Language",
					"value": "Detect Dominant Language",
					"action": "Detect Dominant Language",
					"description": "Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html\">Amazon Comprehend Supported Languages</a>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage"
						}
					}
				},
				{
					"name": "Detect Entities",
					"value": "Detect Entities",
					"action": "Detect Entities",
					"description": "<p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html\">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html\"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectEntities"
						}
					}
				},
				{
					"name": "Detect Key Phrases",
					"value": "Detect Key Phrases",
					"action": "Detect Key Phrases",
					"description": "Detects the key noun phrases found in the text. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases"
						}
					}
				},
				{
					"name": "Detect Pii Entities",
					"value": "Detect Pii Entities",
					"action": "Detect Pii Entities",
					"description": "Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectPiiEntities"
						}
					}
				},
				{
					"name": "Detect Sentiment",
					"value": "Detect Sentiment",
					"action": "Detect Sentiment",
					"description": "Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectSentiment"
						}
					}
				},
				{
					"name": "Detect Syntax",
					"value": "Detect Syntax",
					"action": "Detect Syntax",
					"description": "Inspects text for syntax and the part of speech of words in the document. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html\">Syntax</a> in the Comprehend Developer Guide. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectSyntax"
						}
					}
				},
				{
					"name": "Detect Targeted Sentiment",
					"value": "Detect Targeted Sentiment",
					"action": "Detect Targeted Sentiment",
					"description": "<p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html\">Targeted sentiment</a>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment"
						}
					}
				},
				{
					"name": "Import Model",
					"value": "Import Model",
					"action": "Import Model",
					"description": "<p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ImportModel"
						}
					}
				},
				{
					"name": "List Datasets",
					"value": "List Datasets",
					"action": "List Datasets",
					"description": "List the datasets that you have configured in this Region. For more information about datasets, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListDatasets"
						}
					}
				},
				{
					"name": "List Document Classification Jobs",
					"value": "List Document Classification Jobs",
					"action": "List Document Classification Jobs",
					"description": "Gets a list of the documentation classification jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs"
						}
					}
				},
				{
					"name": "List Document Classifier Summaries",
					"value": "List Document Classifier Summaries",
					"action": "List Document Classifier Summaries",
					"description": "Gets a list of summaries of the document classifiers that you have created",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries"
						}
					}
				},
				{
					"name": "List Document Classifiers",
					"value": "List Document Classifiers",
					"action": "List Document Classifiers",
					"description": "Gets a list of the document classifiers that you have created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers"
						}
					}
				},
				{
					"name": "List Dominant Language Detection Jobs",
					"value": "List Dominant Language Detection Jobs",
					"action": "List Dominant Language Detection Jobs",
					"description": "Gets a list of the dominant language detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs"
						}
					}
				},
				{
					"name": "List Endpoints",
					"value": "List Endpoints",
					"action": "List Endpoints",
					"description": "Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListEndpoints"
						}
					}
				},
				{
					"name": "List Entities Detection Jobs",
					"value": "List Entities Detection Jobs",
					"action": "List Entities Detection Jobs",
					"description": "Gets a list of the entity detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs"
						}
					}
				},
				{
					"name": "List Entity Recognizer Summaries",
					"value": "List Entity Recognizer Summaries",
					"action": "List Entity Recognizer Summaries",
					"description": "Gets a list of summaries for the entity recognizers that you have created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries"
						}
					}
				},
				{
					"name": "List Entity Recognizers",
					"value": "List Entity Recognizers",
					"action": "List Entity Recognizers",
					"description": "<p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers"
						}
					}
				},
				{
					"name": "List Events Detection Jobs",
					"value": "List Events Detection Jobs",
					"action": "List Events Detection Jobs",
					"description": "Gets a list of the events detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs"
						}
					}
				},
				{
					"name": "List Flywheel Iteration History",
					"value": "List Flywheel Iteration History",
					"action": "List Flywheel Iteration History",
					"description": "Information about the history of a flywheel iteration. For more information about flywheels, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory"
						}
					}
				},
				{
					"name": "List Flywheels",
					"value": "List Flywheels",
					"action": "List Flywheels",
					"description": "Gets a list of the flywheels that you have created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListFlywheels"
						}
					}
				},
				{
					"name": "List Key Phrases Detection Jobs",
					"value": "List Key Phrases Detection Jobs",
					"action": "List Key Phrases Detection Jobs",
					"description": "Get a list of key phrase detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs"
						}
					}
				},
				{
					"name": "List Pii Entities Detection Jobs",
					"value": "List Pii Entities Detection Jobs",
					"action": "List Pii Entities Detection Jobs",
					"description": "Gets a list of the PII entity detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs"
						}
					}
				},
				{
					"name": "List Sentiment Detection Jobs",
					"value": "List Sentiment Detection Jobs",
					"action": "List Sentiment Detection Jobs",
					"description": "Gets a list of sentiment detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "Lists all tags associated with a given Amazon Comprehend resource. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListTagsForResource"
						}
					}
				},
				{
					"name": "List Targeted Sentiment Detection Jobs",
					"value": "List Targeted Sentiment Detection Jobs",
					"action": "List Targeted Sentiment Detection Jobs",
					"description": "Gets a list of targeted sentiment detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs"
						}
					}
				},
				{
					"name": "List Topics Detection Jobs",
					"value": "List Topics Detection Jobs",
					"action": "List Topics Detection Jobs",
					"description": "Gets a list of the topic detection jobs that you have submitted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs"
						}
					}
				},
				{
					"name": "Put Resource Policy",
					"value": "Put Resource Policy",
					"action": "Put Resource Policy",
					"description": "Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.PutResourcePolicy"
						}
					}
				},
				{
					"name": "Start Document Classification Job",
					"value": "Start Document Classification Job",
					"action": "Start Document Classification Job",
					"description": "Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob"
						}
					}
				},
				{
					"name": "Start Dominant Language Detection Job",
					"value": "Start Dominant Language Detection Job",
					"action": "Start Dominant Language Detection Job",
					"description": "Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob"
						}
					}
				},
				{
					"name": "Start Entities Detection Job",
					"value": "Start Entities Detection Job",
					"action": "Start Entities Detection Job",
					"description": "<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob"
						}
					}
				},
				{
					"name": "Start Events Detection Job",
					"value": "Start Events Detection Job",
					"action": "Start Events Detection Job",
					"description": "Starts an asynchronous event detection job for a collection of documents.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob"
						}
					}
				},
				{
					"name": "Start Flywheel Iteration",
					"value": "Start Flywheel Iteration",
					"action": "Start Flywheel Iteration",
					"description": "Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html\"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration"
						}
					}
				},
				{
					"name": "Start Key Phrases Detection Job",
					"value": "Start Key Phrases Detection Job",
					"action": "Start Key Phrases Detection Job",
					"description": "Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob"
						}
					}
				},
				{
					"name": "Start Pii Entities Detection Job",
					"value": "Start Pii Entities Detection Job",
					"action": "Start Pii Entities Detection Job",
					"description": "Starts an asynchronous PII entity detection job for a collection of documents.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob"
						}
					}
				},
				{
					"name": "Start Sentiment Detection Job",
					"value": "Start Sentiment Detection Job",
					"action": "Start Sentiment Detection Job",
					"description": "Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob"
						}
					}
				},
				{
					"name": "Start Targeted Sentiment Detection Job",
					"value": "Start Targeted Sentiment Detection Job",
					"action": "Start Targeted Sentiment Detection Job",
					"description": "Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob"
						}
					}
				},
				{
					"name": "Start Topics Detection Job",
					"value": "Start Topics Detection Job",
					"action": "Start Topics Detection Job",
					"description": "Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob"
						}
					}
				},
				{
					"name": "Stop Dominant Language Detection Job",
					"value": "Stop Dominant Language Detection Job",
					"action": "Stop Dominant Language Detection Job",
					"description": "<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob"
						}
					}
				},
				{
					"name": "Stop Entities Detection Job",
					"value": "Stop Entities Detection Job",
					"action": "Stop Entities Detection Job",
					"description": "<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob"
						}
					}
				},
				{
					"name": "Stop Events Detection Job",
					"value": "Stop Events Detection Job",
					"action": "Stop Events Detection Job",
					"description": "Stops an events detection job in progress.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob"
						}
					}
				},
				{
					"name": "Stop Key Phrases Detection Job",
					"value": "Stop Key Phrases Detection Job",
					"action": "Stop Key Phrases Detection Job",
					"description": "<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob"
						}
					}
				},
				{
					"name": "Stop Pii Entities Detection Job",
					"value": "Stop Pii Entities Detection Job",
					"action": "Stop Pii Entities Detection Job",
					"description": "Stops a PII entities detection job in progress.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob"
						}
					}
				},
				{
					"name": "Stop Sentiment Detection Job",
					"value": "Stop Sentiment Detection Job",
					"action": "Stop Sentiment Detection Job",
					"description": "<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob"
						}
					}
				},
				{
					"name": "Stop Targeted Sentiment Detection Job",
					"value": "Stop Targeted Sentiment Detection Job",
					"action": "Stop Targeted Sentiment Detection Job",
					"description": "<p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob"
						}
					}
				},
				{
					"name": "Stop Training Document Classifier",
					"value": "Stop Training Document Classifier",
					"action": "Stop Training Document Classifier",
					"description": "<p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier"
						}
					}
				},
				{
					"name": "Stop Training Entity Recognizer",
					"value": "Stop Training Entity Recognizer",
					"action": "Stop Training Entity Recognizer",
					"description": "<p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.TagResource"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Removes a specific tag associated with an Amazon Comprehend resource. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.UntagResource"
						}
					}
				},
				{
					"name": "Update Endpoint",
					"value": "Update Endpoint",
					"action": "Update Endpoint",
					"description": "Updates information about the specified endpoint. For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint"
						}
					}
				},
				{
					"name": "Update Flywheel",
					"value": "Update Flywheel",
					"action": "Update Flywheel",
					"description": "Update the configuration information for an existing flywheel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=Comprehend_20171127.UpdateFlywheel"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Dominant Language"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.BatchDetectDominantLanguage",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Batch Detect Dominant Language",
					"value": "Comprehend_20171127.BatchDetectDominantLanguage"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Dominant Language"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text List",
			"name": "TextList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. Each document should contain at least 20 characters. The maximum size of each document is 5 KB.",
			"routing": {
				"send": {
					"property": "TextList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Dominant Language"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Dominant Language"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.BatchDetectEntities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.BatchDetectEntities",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Batch Detect Entities",
					"value": "Comprehend_20171127.BatchDetectEntities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Entities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text List",
			"name": "TextList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.",
			"routing": {
				"send": {
					"property": "TextList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Entities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Key Phrases"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.BatchDetectKeyPhrases",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Batch Detect Key Phrases",
					"value": "Comprehend_20171127.BatchDetectKeyPhrases"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Key Phrases"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text List",
			"name": "TextList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.",
			"routing": {
				"send": {
					"property": "TextList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Key Phrases"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Key Phrases"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Key Phrases"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Sentiment"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.BatchDetectSentiment",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Batch Detect Sentiment",
					"value": "Comprehend_20171127.BatchDetectSentiment"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text List",
			"name": "TextList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB. ",
			"routing": {
				"send": {
					"property": "TextList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Sentiment"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Syntax"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.BatchDetectSyntax",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Batch Detect Syntax",
					"value": "Comprehend_20171127.BatchDetectSyntax"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Syntax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text List",
			"name": "TextList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size for each document is 5 KB.",
			"routing": {
				"send": {
					"property": "TextList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Syntax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German (\"de\"), English (\"en\"), Spanish (\"es\"), French (\"fr\"), Italian (\"it\"), or Portuguese (\"pt\"). All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Syntax"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Syntax"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.BatchDetectTargetedSentiment",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Batch Detect Targeted Sentiment",
					"value": "Comprehend_20171127.BatchDetectTargetedSentiment"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text List",
			"name": "TextList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.",
			"routing": {
				"send": {
					"property": "TextList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. Currently, English is the only supported language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ClassifyDocument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ClassifyDocument",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Classify Document",
					"value": "Comprehend_20171127.ClassifyDocument"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "The document text to be analyzed. If you enter text using this parameter, do not use the <code>Bytes</code> parameter.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint Arn",
			"name": "EndpointArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the endpoint. For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.",
			"routing": {
				"send": {
					"property": "EndpointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"displayName": "Bytes",
			"name": "Bytes",
			"type": "string",
			"default": "",
			"description": "<p>Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file. You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code> or <code>AnalyzeDocument</code> output file.</p> <p>Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode the document file bytes for you. </p> <p>The maximum length of this field depends on the input document type. For details, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html\"> Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p> <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>",
			"routing": {
				"send": {
					"property": "Bytes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"displayName": "Document Reader Config",
			"name": "DocumentReaderConfig",
			"type": "json",
			"default": "{\n  \"DocumentReadMode\": {},\n  \"FeatureTypes\": {}\n}",
			"description": "Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.",
			"routing": {
				"send": {
					"property": "DocumentReaderConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Classify Document"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Contains Pii Entities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ContainsPiiEntities",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Contains Pii Entities",
					"value": "Comprehend_20171127.ContainsPiiEntities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Contains Pii Entities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The maximum string size is 100 KB.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Contains Pii Entities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. Currently, English is the only valid language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Contains Pii Entities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Contains Pii Entities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.CreateDataset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.CreateDataset",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Create Dataset",
					"value": "Comprehend_20171127.CreateDataset"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dataset Name",
			"name": "DatasetName",
			"type": "string",
			"default": "",
			"description": "Name of the dataset.",
			"routing": {
				"send": {
					"property": "DatasetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "Dataset Type",
			"name": "DatasetType",
			"type": "options",
			"default": "TRAIN",
			"description": "The dataset type. You can specify that the data in a dataset is for training the model or for testing the model.",
			"options": [
				{
					"name": "TRAIN",
					"value": "TRAIN"
				},
				{
					"name": "TEST",
					"value": "TEST"
				}
			],
			"routing": {
				"send": {
					"property": "DatasetType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "Description",
			"type": "string",
			"default": "",
			"description": "Description of the dataset.",
			"routing": {
				"send": {
					"property": "Description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"AugmentedManifests\": [\n    {\n      \"AttributeNames\": {},\n      \"S3Uri\": {},\n      \"AnnotationDataS3Uri\": {},\n      \"SourceDocumentsS3Uri\": {},\n      \"DocumentType\": {}\n    }\n  ],\n  \"DataFormat\": {},\n  \"DocumentClassifierInputDataConfig\": {},\n  \"EntityRecognizerInputDataConfig\": {}\n}",
			"description": "Information about the input data configuration. The type of input data varies based on the format of the input and whether the data is for a classifier model or an entity recognition model.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags for the dataset.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.CreateDocumentClassifier",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Create Document Classifier",
					"value": "Comprehend_20171127.CreateDocumentClassifier"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document Classifier Name",
			"name": "DocumentClassifierName",
			"type": "string",
			"default": "",
			"description": "The name of the document classifier.",
			"routing": {
				"send": {
					"property": "DocumentClassifierName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Version Name",
			"name": "VersionName",
			"type": "string",
			"default": "",
			"description": "The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.",
			"routing": {
				"send": {
					"property": "VersionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department. ",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"S3Uri\": {},\n  \"TestS3Uri\": {},\n  \"LabelDelimiter\": {},\n  \"AugmentedManifests\": {},\n  \"DocumentType\": {},\n  \"Documents\": {},\n  \"DocumentReaderConfig\": {\n    \"DocumentReadAction\": {},\n    \"DocumentReadMode\": {},\n    \"FeatureTypes\": {}\n  }\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {},\n  \"FlywheelStatsS3Prefix\": {}\n}",
			"description": "Specifies the location for the output files from a custom classifier job. This parameter is required for a request that creates a native classifier model.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "Mode",
			"type": "options",
			"default": "MULTI_CLASS",
			"description": "Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class mode, which identifies one and only one class for each document, or multi-label mode, which identifies one or more labels for each document. In multi-label mode, multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).",
			"options": [
				{
					"name": "MULTI CLASS",
					"value": "MULTI_CLASS"
				},
				{
					"name": "MULTI LABEL",
					"value": "MULTI_LABEL"
				}
			],
			"routing": {
				"send": {
					"property": "Mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Model Kms Key Id",
			"name": "ModelKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ModelKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Model Policy",
			"name": "ModelPolicy",
			"type": "string",
			"default": "",
			"description": "<p>The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another Amazon Web Services account to import your custom model.</p> <p>Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:</p> <p> <code>\"{\\\"attribute\\\": \\\"value\\\", \\\"attribute\\\": [\\\"value\\\"]}\"</code> </p> <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:</p> <p> <code>'{\"attribute\": \"value\", \"attribute\": [\"value\"]}'</code> </p>",
			"routing": {
				"send": {
					"property": "ModelPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.CreateEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.CreateEndpoint",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Create Endpoint",
					"value": "Comprehend_20171127.CreateEndpoint"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint Name",
			"name": "EndpointName",
			"type": "string",
			"default": "",
			"description": "This is the descriptive suffix that becomes part of the <code>EndpointArn</code> used for all subsequent requests to this resource. ",
			"routing": {
				"send": {
					"property": "EndpointName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Model Arn",
			"name": "ModelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the model to which the endpoint will be attached.",
			"routing": {
				"send": {
					"property": "ModelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Desired Inference Units",
			"name": "DesiredInferenceUnits",
			"type": "number",
			"default": 0,
			"description": " The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.",
			"routing": {
				"send": {
					"property": "DesiredInferenceUnits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon Comprehend will not return a <code>ResourceInUseException</code>. ",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with \"Sales\" as the key might be added to an endpoint to indicate its use by the sales department. ",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Endpoint"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.CreateEntityRecognizer",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Create Entity Recognizer",
					"value": "Comprehend_20171127.CreateEntityRecognizer"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recognizer Name",
			"name": "RecognizerName",
			"type": "string",
			"default": "",
			"description": "The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/Region.",
			"routing": {
				"send": {
					"property": "RecognizerName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Version Name",
			"name": "VersionName",
			"type": "string",
			"default": "",
			"description": "The version name given to the newly created recognizer. Version names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same recognizer name in the account/Region.",
			"routing": {
				"send": {
					"property": "VersionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the entity recognizer. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department. ",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"EntityTypes\": {},\n  \"Documents\": {},\n  \"Annotations\": {},\n  \"EntityList\": {},\n  \"AugmentedManifests\": {}\n}",
			"description": "Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created. ",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": " A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": " You can specify any of the following languages: English (\"en\"), Spanish (\"es\"), French (\"fr\"), Italian (\"it\"), German (\"de\"), or Portuguese (\"pt\"). If you plan to use this entity recognizer with PDF, Word, or image input files, you must specify English as the language. All training documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Model Kms Key Id",
			"name": "ModelKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ModelKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Model Policy",
			"name": "ModelPolicy",
			"type": "string",
			"default": "",
			"description": "<p>The JSON resource-based policy to attach to your custom entity recognizer model. You can use this policy to allow another Amazon Web Services account to import your custom model.</p> <p>Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:</p> <p> <code>\"{\\\"attribute\\\": \\\"value\\\", \\\"attribute\\\": [\\\"value\\\"]}\"</code> </p> <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:</p> <p> <code>'{\"attribute\": \"value\", \"attribute\": [\"value\"]}'</code> </p>",
			"routing": {
				"send": {
					"property": "ModelPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.CreateFlywheel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.CreateFlywheel",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Create Flywheel",
					"value": "Comprehend_20171127.CreateFlywheel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Name",
			"name": "FlywheelName",
			"type": "string",
			"default": "",
			"description": "Name for the flywheel.",
			"routing": {
				"send": {
					"property": "FlywheelName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Active Model Arn",
			"name": "ActiveModelArn",
			"type": "string",
			"default": "",
			"description": "To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version.",
			"routing": {
				"send": {
					"property": "ActiveModelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Task Config",
			"name": "TaskConfig",
			"type": "json",
			"default": "{\n  \"DocumentClassificationConfig\": {},\n  \"EntityRecognitionConfig\": {}\n}",
			"description": "Configuration about the custom classifier associated with the flywheel.",
			"routing": {
				"send": {
					"property": "TaskConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Model Type",
			"name": "ModelType",
			"type": "options",
			"default": "DOCUMENT_CLASSIFIER",
			"description": "The model type.",
			"options": [
				{
					"name": "DOCUMENT CLASSIFIER",
					"value": "DOCUMENT_CLASSIFIER"
				},
				{
					"name": "ENTITY RECOGNIZER",
					"value": "ENTITY_RECOGNIZER"
				}
			],
			"routing": {
				"send": {
					"property": "ModelType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Lake S 3 Uri",
			"name": "DataLakeS3Uri",
			"type": "string",
			"default": "",
			"description": "Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3 bucket. The flywheel creates the data lake at this location.",
			"routing": {
				"send": {
					"property": "DataLakeS3Uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Data Security Config",
			"name": "DataSecurityConfig",
			"type": "json",
			"default": "{\n  \"VolumeKmsKeyId\": {},\n  \"DataLakeKmsKeyId\": {},\n  \"VpcConfig\": {\n    \"SecurityGroupIds\": {},\n    \"Subnets\": {}\n  }\n}",
			"description": "Data security configurations.",
			"routing": {
				"send": {
					"property": "DataSecurityConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tags to associate with this flywheel.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Flywheel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DeleteDocumentClassifier",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Delete Document Classifier",
					"value": "Comprehend_20171127.DeleteDocumentClassifier"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document Classifier Arn",
			"name": "DocumentClassifierArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the document classifier. ",
			"routing": {
				"send": {
					"property": "DocumentClassifierArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DeleteEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Endpoint"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DeleteEndpoint",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Delete Endpoint",
					"value": "Comprehend_20171127.DeleteEndpoint"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Endpoint"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint Arn",
			"name": "EndpointArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the endpoint being deleted.",
			"routing": {
				"send": {
					"property": "EndpointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Endpoint"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DeleteEntityRecognizer",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Delete Entity Recognizer",
					"value": "Comprehend_20171127.DeleteEntityRecognizer"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entity Recognizer Arn",
			"name": "EntityRecognizerArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the entity recognizer.",
			"routing": {
				"send": {
					"property": "EntityRecognizerArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DeleteFlywheel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Flywheel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DeleteFlywheel",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Delete Flywheel",
					"value": "Comprehend_20171127.DeleteFlywheel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Flywheel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel to delete.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Flywheel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DeleteResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Delete Resource Policy",
					"value": "Comprehend_20171127.DeleteResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Revision Id",
			"name": "PolicyRevisionId",
			"type": "string",
			"default": "",
			"description": "The revision ID of the policy to delete.",
			"routing": {
				"send": {
					"property": "PolicyRevisionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeDataset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeDataset",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Dataset",
					"value": "Comprehend_20171127.DescribeDataset"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dataset Arn",
			"name": "DatasetArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the dataset.",
			"routing": {
				"send": {
					"property": "DatasetArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dataset"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeDocumentClassificationJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Document Classification Job",
					"value": "Comprehend_20171127.DescribeDocumentClassificationJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classification Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The <code>StartDocumentClassificationJob</code> operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeDocumentClassifier",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Document Classifier",
					"value": "Comprehend_20171127.DescribeDocumentClassifier"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document Classifier Arn",
			"name": "DocumentClassifierArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the document classifier. The <code>CreateDocumentClassifier</code> operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "DocumentClassifierArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeDominantLanguageDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Dominant Language Detection Job",
					"value": "Comprehend_20171127.DescribeDominantLanguageDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The <code>StartDominantLanguageDetectionJob</code> operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Endpoint"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeEndpoint",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Endpoint",
					"value": "Comprehend_20171127.DescribeEndpoint"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Endpoint"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint Arn",
			"name": "EndpointArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the endpoint being described.",
			"routing": {
				"send": {
					"property": "EndpointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Endpoint"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeEntitiesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Entities Detection Job",
					"value": "Comprehend_20171127.DescribeEntitiesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The <code>StartEntitiesDetectionJob</code> operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeEntityRecognizer",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Entity Recognizer",
					"value": "Comprehend_20171127.DescribeEntityRecognizer"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entity Recognizer Arn",
			"name": "EntityRecognizerArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the entity recognizer.",
			"routing": {
				"send": {
					"property": "EntityRecognizerArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeEventsDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Events Detection Job",
					"value": "Comprehend_20171127.DescribeEventsDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the events detection job.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeFlywheel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeFlywheel",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Flywheel",
					"value": "Comprehend_20171127.DescribeFlywheel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeFlywheelIteration",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Flywheel Iteration",
					"value": "Comprehend_20171127.DescribeFlywheelIteration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel Iteration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "<p/>",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel Iteration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Iteration Id",
			"name": "FlywheelIterationId",
			"type": "string",
			"default": "",
			"description": "<p/>",
			"routing": {
				"send": {
					"property": "FlywheelIterationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeKeyPhrasesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Key Phrases Detection Job",
					"value": "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The <code>StartKeyPhrasesDetectionJob</code> operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribePiiEntitiesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Pii Entities Detection Job",
					"value": "Comprehend_20171127.DescribePiiEntitiesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Resource Policy",
					"value": "Comprehend_20171127.DescribeResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the custom model version that has the resource policy.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeSentimentDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Sentiment Detection Job",
					"value": "Comprehend_20171127.DescribeSentimentDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeTargetedSentimentDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Targeted Sentiment Detection Job",
					"value": "Comprehend_20171127.DescribeTargetedSentimentDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier that Amazon Comprehend generated for the job. The <code>StartTargetedSentimentDetectionJob</code> operation returns this identifier in its response.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DescribeTopicsDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Describe Topics Detection Job",
					"value": "Comprehend_20171127.DescribeTopicsDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Topics Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier assigned by the user to the detection job.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Dominant Language"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectDominantLanguage",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Dominant Language",
					"value": "Comprehend_20171127.DetectDominantLanguage"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Dominant Language"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Dominant Language"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Dominant Language"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectEntities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectEntities",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Entities",
					"value": "Comprehend_20171127.DetectEntities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter, do not use the <code>Bytes</code> parameter.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "<p>The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you specify here.</p> <p>All input documents must be in the same language.</p>",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Endpoint Arn",
			"name": "EndpointArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model. Provide an endpoint if you want to detect entities by using your own custom model instead of the default model that is used by Amazon Comprehend.</p> <p>If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and it ignores any language code that you provide in your request.</p> <p>For information about endpoints, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html\">Managing endpoints</a>.</p>",
			"routing": {
				"send": {
					"property": "EndpointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Bytes",
			"name": "Bytes",
			"type": "string",
			"default": "",
			"description": "<p>This field applies only when you use a custom entity recognition model that was trained with PDF annotations. For other cases, enter your text input in the <code>Text</code> field.</p> <p> Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file. Using a plain-text file in the <code>Bytes</code> parameter is equivelent to using the <code>Text</code> parameter (the <code>Entities</code> field in the response is identical).</p> <p>You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code> or <code>AnalyzeDocument</code> output file.</p> <p>Provide the input document as a sequence of base64-encoded bytes. If your code uses an Amazon Web Services SDK to detect entities, the SDK may encode the document file bytes for you. </p> <p>The maximum length of this field depends on the input document type. For details, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html\"> Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p> <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>",
			"routing": {
				"send": {
					"property": "Bytes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Document Reader Config",
			"name": "DocumentReaderConfig",
			"type": "json",
			"default": "{\n  \"DocumentReadMode\": {},\n  \"FeatureTypes\": {}\n}",
			"description": "Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.",
			"routing": {
				"send": {
					"property": "DocumentReaderConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Entities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Key Phrases"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectKeyPhrases",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Key Phrases",
					"value": "Comprehend_20171127.DetectKeyPhrases"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Key Phrases"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded characters.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Key Phrases"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Key Phrases"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Key Phrases"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectPiiEntities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Pii Entities"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectPiiEntities",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Pii Entities",
					"value": "Comprehend_20171127.DetectPiiEntities"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Pii Entities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The maximum string size is 100 KB.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Pii Entities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. Currently, English is the only valid language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Pii Entities"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Pii Entities"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectSentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Sentiment"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectSentiment",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Sentiment",
					"value": "Comprehend_20171127.DetectSentiment"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The maximum string size is 5 KB.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Sentiment"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectSyntax",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Syntax"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectSyntax",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Syntax",
					"value": "Comprehend_20171127.DetectSyntax"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Syntax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 string. The maximum string size is 5 KB.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Syntax"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language code of the input documents. You can specify any of the following languages supported by Amazon Comprehend: German (\"de\"), English (\"en\"), Spanish (\"es\"), French (\"fr\"), Italian (\"it\"), or Portuguese (\"pt\").",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Syntax"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Syntax"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.DetectTargetedSentiment",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Detect Targeted Sentiment",
					"value": "Comprehend_20171127.DetectTargetedSentiment"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "",
			"description": "A UTF-8 text string. The maximum string length is 5 KB.",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. Currently, English is the only supported language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Detect Targeted Sentiment"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ImportModel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ImportModel",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Import Model",
					"value": "Comprehend_20171127.ImportModel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Model Arn",
			"name": "SourceModelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the custom model to import.",
			"routing": {
				"send": {
					"property": "SourceModelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "Model Name",
			"name": "ModelName",
			"type": "string",
			"default": "",
			"description": "The name to assign to the custom model that is created in Amazon Comprehend by this import.",
			"routing": {
				"send": {
					"property": "ModelName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "Version Name",
			"name": "VersionName",
			"type": "string",
			"default": "",
			"description": "The version name given to the custom model that is created by this import. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the account/Region.",
			"routing": {
				"send": {
					"property": "VersionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "Model Kms Key Id",
			"name": "ModelKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ModelKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom model.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the custom model that is created by this import. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Model"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListDatasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListDatasets",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Datasets",
					"value": "Comprehend_20171127.ListDatasets"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"DatasetType\": {},\n  \"CreationTimeAfter\": {},\n  \"CreationTimeBefore\": {}\n}",
			"description": "Filters the datasets to be returned in the response.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Maximum number of results to return in a response. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListDocumentClassificationJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Document Classification Jobs",
					"value": "Comprehend_20171127.ListDocumentClassificationJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their names, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classification Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListDocumentClassifierSummaries",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Document Classifier Summaries",
					"value": "Comprehend_20171127.ListDocumentClassifierSummaries"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return on each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifier Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListDocumentClassifiers",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Document Classifiers",
					"value": "Comprehend_20171127.ListDocumentClassifiers"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"DocumentClassifierName\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Document Classifiers"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListDominantLanguageDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Dominant Language Detection Jobs",
					"value": "Comprehend_20171127.ListDominantLanguageDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters that jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Dominant Language Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListEndpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListEndpoints",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Endpoints",
					"value": "Comprehend_20171127.ListEndpoints"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Status\": {},\n  \"CreationTimeBefore\": {},\n  \"CreationTimeAfter\": {}\n}",
			"description": "Filters the endpoints that are returned. You can filter endpoints on their name, model, status, or the date and time that they were created. You can only set one filter at a time. ",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListEntitiesDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Entities Detection Jobs",
					"value": "Comprehend_20171127.ListEntitiesDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListEntityRecognizerSummaries",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Entity Recognizer Summaries",
					"value": "Comprehend_20171127.ListEntityRecognizerSummaries"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return on each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizer Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListEntityRecognizers",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Entity Recognizers",
					"value": "Comprehend_20171127.ListEntityRecognizers"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"RecognizerName\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the list of entities returned. You can filter on <code>Status</code>, <code>SubmitTimeBefore</code>, or <code>SubmitTimeAfter</code>. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of results to return on each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Entity Recognizers"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListEventsDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Events Detection Jobs",
					"value": "Comprehend_20171127.ListEventsDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Events Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListFlywheelIterationHistory",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Flywheel Iteration History",
					"value": "Comprehend_20171127.ListFlywheelIterationHistory"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the flywheel.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"CreationTimeBefore\": {}\n}",
			"description": "Filter the flywheel iteration history based on creation time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Next token",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Maximum number of iteration history results to return",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheel Iteration History"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListFlywheels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListFlywheels",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Flywheels",
					"value": "Comprehend_20171127.ListFlywheels"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"CreationTimeAfter\": {},\n  \"CreationTimeBefore\": {}\n}",
			"description": "Filters the flywheels that are returned. You can filter flywheels on their status, or the date and time that they were submitted. You can only set one filter at a time. ",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Maximum number of results to return in a response. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Flywheels"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListKeyPhrasesDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Key Phrases Detection Jobs",
					"value": "Comprehend_20171127.ListKeyPhrasesDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Phrases Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListPiiEntitiesDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Pii Entities Detection Jobs",
					"value": "Comprehend_20171127.ListPiiEntitiesDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Pii Entities Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListSentimentDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Sentiment Detection Jobs",
					"value": "Comprehend_20171127.ListSentimentDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListTagsForResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListTagsForResource",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Tags For Resource",
					"value": "Comprehend_20171127.ListTagsForResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListTargetedSentimentDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Targeted Sentiment Detection Jobs",
					"value": "Comprehend_20171127.ListTargetedSentimentDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. You can filter jobs on their name, status, or the date and time that they were submitted. You can only set one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Targeted Sentiment Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.ListTopicsDetectionJobs",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 List Topics Detection Jobs",
					"value": "Comprehend_20171127.ListTopicsDetectionJobs"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"JobStatus\": {},\n  \"SubmitTimeBefore\": {},\n  \"SubmitTimeAfter\": {}\n}",
			"description": "Filters the jobs that are returned. Jobs can be filtered on their name, status, or the date and time that they were submitted. You can set only one filter at a time.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Identifies the next page of results to return.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results to return in each page. The default is 100.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Topics Detection Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.PutResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.PutResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Put Resource Policy",
					"value": "Comprehend_20171127.PutResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the custom model to attach the policy to.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Policy",
			"name": "ResourcePolicy",
			"type": "string",
			"default": "",
			"description": "<p>The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:</p> <p> <code>\"{\\\"attribute\\\": \\\"value\\\", \\\"attribute\\\": [\\\"value\\\"]}\"</code> </p> <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:</p> <p> <code>'{\"attribute\": \"value\", \"attribute\": [\"value\"]}'</code> </p>",
			"routing": {
				"send": {
					"property": "ResourcePolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Revision Id",
			"name": "PolicyRevisionId",
			"type": "string",
			"default": "",
			"description": "The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are creating a new policy that has no prior version, don't use this parameter. Amazon Comprehend creates the revision ID for you.",
			"routing": {
				"send": {
					"property": "PolicyRevisionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartDocumentClassificationJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Document Classification Job",
					"value": "Comprehend_20171127.StartDocumentClassificationJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Document Classifier Arn",
			"name": "DocumentClassifierArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the document classifier to use to process the job.",
			"routing": {
				"send": {
					"property": "DocumentClassifierArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the document classification job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel associated with the model to use.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Document Classification Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartDominantLanguageDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Dominant Language Detection Job",
					"value": "Comprehend_20171127.StartDominantLanguageDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions\">Role-based permissions</a>.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "An identifier for the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your dominant language detection job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the dominant language detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartEntitiesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Entities Detection Job",
					"value": "Comprehend_20171127.StartEntitiesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions\">Role-based permissions</a>.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Entity Recognizer Arn",
			"name": "EntityRecognizerArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used by the <code>StartEntitiesDetectionJob</code>. This ARN is optional and is only used for a custom entity recognition job.",
			"routing": {
				"send": {
					"property": "EntityRecognizerArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. All documents must be in the same language. You can specify any of the languages supported by Amazon Comprehend. If custom entities recognition is used, this parameter is ignored and the language used for training the model is used instead.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel associated with the model to use.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartEventsDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Events Detection Job",
					"value": "Comprehend_20171127.StartEventsDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the events detection job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language code of the input documents.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "An unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target Event Types",
			"name": "TargetEventTypes",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The types of events to detect in the input documents.",
			"routing": {
				"send": {
					"property": "TargetEventTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the events detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartFlywheelIteration",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Flywheel Iteration",
					"value": "Comprehend_20171127.StartFlywheelIteration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Flywheel Iteration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the flywheel.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Flywheel Iteration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartKeyPhrasesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Key Phrases Detection Job",
					"value": "Comprehend_20171127.StartKeyPhrasesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions\">Role-based permissions</a>.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": " Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your key phrases detection job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the key phrases detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartPiiEntitiesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Pii Entities Detection Job",
					"value": "Comprehend_20171127.StartPiiEntitiesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "The input properties for a PII entities detection job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Provides conﬁguration parameters for the output of PII entity detection jobs.",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "Mode",
			"type": "options",
			"default": "ONLY_REDACTION",
			"description": "Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.",
			"options": [
				{
					"name": "ONLY REDACTION",
					"value": "ONLY_REDACTION"
				},
				{
					"name": "ONLY OFFSETS",
					"value": "ONLY_OFFSETS"
				}
			],
			"routing": {
				"send": {
					"property": "Mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Redaction Config",
			"name": "RedactionConfig",
			"type": "json",
			"default": "{\n  \"PiiEntityTypes\": [\n    null\n  ],\n  \"MaskMode\": {},\n  \"MaskCharacter\": {}\n}",
			"description": "<p>Provides configuration parameters for PII entity redaction.</p> <p>This parameter is required if you set the <code>Mode</code> parameter to <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code> definition that includes the <code>PiiEntityTypes</code> parameter.</p>",
			"routing": {
				"send": {
					"property": "RedactionConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. Currently, English is the only valid language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the PII entities detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartSentimentDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Sentiment Detection Job",
					"value": "Comprehend_20171127.StartSentimentDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files. ",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions\">Role-based permissions</a>.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your sentiment detection job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartTargetedSentimentDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Targeted Sentiment Detection Job",
					"value": "Comprehend_20171127.StartTargetedSentimentDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files. ",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions\">Role-based permissions</a>.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Language Code",
			"name": "LanguageCode",
			"type": "options",
			"default": "en",
			"description": "The language of the input documents. Currently, English is the only supported language.",
			"options": [
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ar",
					"value": "ar"
				},
				{
					"name": "Hi",
					"value": "hi"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				},
				{
					"name": "Zh TW",
					"value": "zh-TW"
				}
			],
			"routing": {
				"send": {
					"property": "LanguageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": " Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the targeted sentiment detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StartTopicsDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Start Topics Detection Job",
					"value": "Comprehend_20171127.StartTopicsDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Data Config",
			"name": "InputDataConfig",
			"type": "json",
			"default": "{\n  \"InputFormat\": {},\n  \"DocumentReaderConfig\": {}\n}",
			"description": "Specifies the format and location of the input data for the job.",
			"routing": {
				"send": {
					"property": "InputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Data Config",
			"name": "OutputDataConfig",
			"type": "json",
			"default": "{\n  \"KmsKeyId\": {}\n}",
			"description": "Specifies where to send the output files. The output is a compressed archive with two files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and <code>doc-topics.csv</code> that lists the documents associated with each topic",
			"routing": {
				"send": {
					"property": "OutputDataConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. For more information, see <a href=\"https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions\">Role-based permissions</a>.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Job Name",
			"name": "JobName",
			"type": "string",
			"default": "",
			"description": "The identifier of the job.",
			"routing": {
				"send": {
					"property": "JobName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Number Of Topics",
			"name": "NumberOfTopics",
			"type": "number",
			"default": 0,
			"description": "The number of topics to detect.",
			"routing": {
				"send": {
					"property": "NumberOfTopics",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Volume Kms Key Id",
			"name": "VolumeKmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>\"1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>\"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab\"</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "VolumeKmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Vpc Config",
			"name": "VpcConfig",
			"type": "json",
			"default": "{\n  \"SecurityGroupIds\": [\n    null\n  ],\n  \"Subnets\": {}\n}",
			"description": "Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. ",
			"routing": {
				"send": {
					"property": "VpcConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to associate with the topics detection job. A tag is a key-value pair that adds metadata to a resource used by Amazon Comprehend. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Topics Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopDominantLanguageDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Dominant Language Detection Job",
					"value": "Comprehend_20171127.StopDominantLanguageDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the dominant language detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Dominant Language Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopEntitiesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Entities Detection Job",
					"value": "Comprehend_20171127.StopEntitiesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the entities detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopEventsDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Events Detection Job",
					"value": "Comprehend_20171127.StopEventsDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Events Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the events detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Events Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopKeyPhrasesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Key Phrases Detection Job",
					"value": "Comprehend_20171127.StopKeyPhrasesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the key phrases detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Key Phrases Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopPiiEntitiesDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Pii Entities Detection Job",
					"value": "Comprehend_20171127.StopPiiEntitiesDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the PII entities detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Pii Entities Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopSentimentDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Sentiment Detection Job",
					"value": "Comprehend_20171127.StopSentimentDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the sentiment detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopTargetedSentimentDetectionJob",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Targeted Sentiment Detection Job",
					"value": "Comprehend_20171127.StopTargetedSentimentDetectionJob"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Job Id",
			"name": "JobId",
			"type": "string",
			"default": "",
			"description": "The identifier of the targeted sentiment detection job to stop.",
			"routing": {
				"send": {
					"property": "JobId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Targeted Sentiment Detection Job"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopTrainingDocumentClassifier",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Training Document Classifier",
					"value": "Comprehend_20171127.StopTrainingDocumentClassifier"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Document Classifier"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document Classifier Arn",
			"name": "DocumentClassifierArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the document classifier currently being trained.",
			"routing": {
				"send": {
					"property": "DocumentClassifierArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Document Classifier"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.StopTrainingEntityRecognizer",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Stop Training Entity Recognizer",
					"value": "Comprehend_20171127.StopTrainingEntityRecognizer"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Entity Recognizer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entity Recognizer Arn",
			"name": "EntityRecognizerArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained.",
			"routing": {
				"send": {
					"property": "EntityRecognizerArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Training Entity Recognizer"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.TagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.TagResource",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Tag Resource",
					"value": "Comprehend_20171127.TagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want to associate the tags. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags being associated with a specific Amazon Comprehend resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource. ",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.UntagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.UntagResource",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Untag Resource",
					"value": "Comprehend_20171127.UntagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": " The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag with \"Sales\" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource. ",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.UpdateEndpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.UpdateEndpoint",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Update Endpoint",
					"value": "Comprehend_20171127.UpdateEndpoint"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint Arn",
			"name": "EndpointArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the endpoint being updated.",
			"routing": {
				"send": {
					"property": "EndpointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Desired Model Arn",
			"name": "DesiredModelArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the new model to use when updating an existing endpoint.",
			"routing": {
				"send": {
					"property": "DesiredModelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Desired Inference Units",
			"name": "DesiredInferenceUnits",
			"type": "number",
			"default": 0,
			"description": " The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.",
			"routing": {
				"send": {
					"property": "DesiredInferenceUnits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Desired Data Access Role Arn",
			"name": "DesiredDataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "Data access role ARN to use in case the new model is encrypted with a customer CMK.",
			"routing": {
				"send": {
					"property": "DesiredDataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Endpoint"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=Comprehend_20171127.UpdateFlywheel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "Comprehend_20171127.UpdateFlywheel",
			"type": "options",
			"options": [
				{
					"name": "Comprehend 20171127 Update Flywheel",
					"value": "Comprehend_20171127.UpdateFlywheel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Flywheel Arn",
			"name": "FlywheelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the flywheel to update.",
			"routing": {
				"send": {
					"property": "FlywheelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Active Model Arn",
			"name": "ActiveModelArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Number (ARN) of the active model version.",
			"routing": {
				"send": {
					"property": "ActiveModelArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Data Access Role Arn",
			"name": "DataAccessRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.",
			"routing": {
				"send": {
					"property": "DataAccessRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Data Security Config",
			"name": "DataSecurityConfig",
			"type": "json",
			"default": "{\n  \"VolumeKmsKeyId\": {},\n  \"VpcConfig\": {\n    \"SecurityGroupIds\": {},\n    \"Subnets\": {}\n  }\n}",
			"description": "Flywheel data security configuration.",
			"routing": {
				"send": {
					"property": "DataSecurityConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Flywheel"
					]
				}
			}
		},
];
