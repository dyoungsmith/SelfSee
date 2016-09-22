//
//  ViewController.m
//  SelfSee
//
//  Created by Dani YoungSmith on 9/22/16.
//  Copyright © 2016 Dani YoungSmith. All rights reserved.
//

#import "ViewController.h"

@interface ViewController (CameraDelegateMethods)

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)openCamera:(id)sender {
    [self launchCameraControllerFromViewController:self usingDelegate:self]; //lauch the camera controller
}

-(BOOL) launchCameraControllerFromViewController: (UIViewController*) controller usingDelegate: (id <UIImagePickerControllerDelegate, UINavigationControllerDelegate>) delegate {
    BOOL truefalse = [UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera]; //variable to check whether there is a camera available
    //if there is a camera, the delegate passed exists, and the controller passed exists, proceed on, otherwise don't go any further
    if (!truefalse || (delegate == nil) || (controller == nil)) {
        NSLog(@"no can do, delegate/camera/view controller doesn't exist!");
        return NO;
    }
    
    UIImagePickerController *cameraController = [[UIImagePickerController alloc] init];
    
    cameraController.sourceType = UIImagePickerControllerSourceTypeCamera;
    cameraController.mediaTypes = [UIImagePickerController availableMediaTypesForSourceType:UIImagePickerControllerSourceTypeCamera];
    cameraController.allowsEditing = NO;
    cameraController.delegate = delegate;
    
    [controller presentModalViewController:cameraController animated:YES];
}

- (void) imagePickerControllerDidCancel: (UIImagePickerController *) picker {
    [picker dismissModalViewControllerAnimated:YES]; //dismisses the camera controller
}

- (void) imagePickerController: (UIImagePickerController*) picker didFinishPickingMediaWithInfo:(NSDictionary *)info
{
    NSString *mediaType = [info objectForKey: UIImagePickerControllerMediaType];
    UIImage *originalImage, *editedImage, *imageToSave;
    
    // Process for saving an image
    if (CFStringCompare ((CFStringRef) mediaType, kUTTypeImage, 0)
        == kCFCompareEqualTo) {//if it's an image
        
        editedImage = (UIImage *) [info objectForKey:
                                   UIImagePickerControllerEditedImage]; //Assign the edited image to editedImage
        originalImage = (UIImage *) [info objectForKey:
                                     UIImagePickerControllerOriginalImage]; //Assign the original image to originalImage
        //Check to see if there was indeed an edited image, if so use that, otherwise use the original
        if (editedImage) {
            imageToSave = editedImage;
        } else {
            imageToSave = originalImage;
        }
        
        // Save the image to the Camera Roll
        UIImageWriteToSavedPhotosAlbum (imageToSave, nil, nil , nil);
    }
    
    // Process for saving a video
    if (CFStringCompare ((CFStringRef) mediaType, kUTTypeMovie, 0)
        == kCFCompareEqualTo) {//if it's a video
        //define the movie
        NSString *moviePath = [[info objectForKey:
                                UIImagePickerControllerMediaURL] path];
        //if possible, save in the camera roll
        if (UIVideoAtPathIsCompatibleWithSavedPhotosAlbum (moviePath)) {
            UISaveVideoAtPathToSavedPhotosAlbum (
                                                 moviePath, nil, nil, nil);
        }
    }
    
    [picker dismissModalViewControllerAnimated: YES]; //Dismiss the controller
    [self.imageView setImage:imageToSave]; //Assign the picture to the image view
}

@end
